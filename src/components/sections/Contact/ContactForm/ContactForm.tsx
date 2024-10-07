import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from '@/components/common/FormField/FormField';
import Button from '@components/common/Button/Button';
import styles from './ContactForm.module.scss';
import StatusMessage from '@/components/common/FormStatusMessage/FormStatusMessage';

// Validación con Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Debe tener al menos 2 caracteres')
    .max(50, 'No puede tener más de 50 caracteres')
    .required('El nombre es obligatorio'),
  email: Yup.string()
    .email('Correo electrónico inválido')
    .required('El correo electrónico es obligatorio'),
  message: Yup.string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .required('El mensaje es obligatorio'),
});

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState<{ success: boolean; message: string } | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  
  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Error en el envío del formulario');
      }

      setMessage({ success: true, message: 'Formulario enviado correctamente!' });
      setShowPopup(true);

      values.name = '';
      values.email = '';
      values.message = '';

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage({ success: false, message: 'Error al enviar el formulario. Inténtalo de nuevo.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form className={styles['contact-form']}>
            <div className={styles['contact-form__row']}>
              <FormField name="name" label="Nombre" required />
              <FormField name="email" label="Correo Electrónico" type="email" required />
            </div>
            <FormField name="message" label="Mensaje" tag="textarea" required />
            <Button 
              type="submit" 
              text={isSubmitting ? 'Enviando...' : 'Enviar'} 
              className={styles['contact-form__button']} 
              disabled={isSubmitting || !isValid || !values.name || !values.email || !values.message}
            />

            {message && !message.success && (
              <StatusMessage success={false} message={message.message} />
            )}
          </Form>
        )}
      </Formik>

      {showPopup && message?.success && (
        <StatusMessage success={true} message={message.message} isPopup />
      )}

    </>
  );
};

export default ContactForm;

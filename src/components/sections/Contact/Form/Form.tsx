import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';

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

const MaiForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    message: '',
  };

  const handleSubmit = async (values: FormValues) => {
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

      console.log('Formulario enviado exitosamente:', values);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={styles['form']}>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nombre</label>
            <Field
              type="text"
              id="name"
              name="name"
              className={styles['form-control']}
            />
            <ErrorMessage name="name" component="div" className={styles['error']} />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="email">Correo electrónico</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={styles['form-control']}
            />
            <ErrorMessage name="email" component="div" className={styles['error']} />
          </div>

          <div className={styles['form-group']}>
            <label htmlFor="message">Mensaje</label>
            <Field
              as="textarea"
              id="message"
              name="message"
              className={styles['form-control']}
            />
            <ErrorMessage name="message" component="div" className={styles['error']} />
          </div>

          <button type="submit" className={styles['submit-button']}>
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MaiForm;

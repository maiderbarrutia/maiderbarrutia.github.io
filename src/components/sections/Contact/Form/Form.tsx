import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';
import Button from '@components/common/Button/Button';

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

      console.log('Formulario enviado correctamente:', values);
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
      {({ errors, touched }) => (
        <Form className={styles['contact-form']}>
          <div className={styles['contact-form__container']}>
            <div className={styles['contact-form__row']}>
              <div className={styles['contact-form__group']}>
                <Field
                  type="text"
                  name="name"
                  placeholder=" "
                  className={`${styles['contact-form__control']} ${touched.name && errors.name ? styles['contact-form__control--invalid'] : ''}`}
                />
                <label htmlFor="name" className={`${styles['contact-form__label']} ${styles['contact-form__label--required']}`}>Nombre</label>
                <ErrorMessage name="name" component="div" className={styles['contact-form__error']} />
              </div>

              <div className={styles['contact-form__group']}>
                <Field
                  type="email"
                  name="email"
                  placeholder=" "
                  className={`${styles['contact-form__control']} ${touched.name && errors.name ? styles['contact-form__control--invalid'] : ''}`}
                />
                <label htmlFor="email" className={`${styles['contact-form__label']} ${styles['contact-form__label--required']}`}>Correo Electrónico</label>
                <ErrorMessage name="email" component="div" className={styles['contact-form__error']} />
              </div>
            </div>

            <div className={styles['contact-form__group']}>
              <Field
                as="textarea"
                name="message"
                placeholder=" "
                className={`${styles['contact-form__control']} ${touched.name && errors.name ? styles['contact-form__control--invalid'] : ''}`}
              />
              <label htmlFor="message" className={`${styles['contact-form__label']} ${styles['contact-form__label--required']}`}>Mensaje</label>
              <ErrorMessage name="message" component="div" className={styles['contact-form__error']} />
            </div>
          </div>

          <Button type="submit" text="Enviar" className={styles['contact-form__button']}/>
        </Form>
      )}
    </Formik>
  );
};

export default MaiForm;


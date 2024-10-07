import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormField.module.scss';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  tag?: string;
  required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, type = 'text', tag, required = false }) => {
  return (
    <div className={styles['form-group']}>
      <Field
        name={name}
        type={type}
        as={tag}
        placeholder=" "
        className={`${styles['form-group__control']}`}
      />
      <label htmlFor={name} className={`${styles['form-group__label']} ${required ? styles['form-group__label--required'] : ''}`}>
        {label}
      </label>
      <ErrorMessage name={name} component="div" className={styles['form-group__error']} />
    </div>
  );
};

export default FormField;
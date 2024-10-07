import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import styles from './Login.module.scss';
import SectionHeader from '@components/common/SectionHeader/SectionHeader';
import Button from '@components/common/Button/Button';
import FormField from '@/components/common/FormField/FormField';
import StatusMessage from '@/components/common/FormStatusMessage/FormStatusMessage';

const LoginSchema = Yup.object().shape({
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
});

interface LoginFormValues {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const { login } = useAuth(); 
    const navigate = useNavigate();
    const [message, setMessage] = useState<{ success: boolean; message: string } | null>(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (
        values: LoginFormValues,
        { setSubmitting }: FormikHelpers<LoginFormValues>
    ) => {
        const { username, password } = values;

        // Reset message
        setMessage(null);
        
        const isLoggedIn = login(username, password);
        
        if (isLoggedIn) {
            setMessage({ success: true, message: '¡Has iniciado sesión correctamente!' });
            setShowPopup(true);

            setTimeout(() => {
                navigate('/');
                setShowPopup(false);
            }, 3000);

        } else {
            setMessage({ success: false, message: '¡Usuario o contraseña incorrectos!' });
        }

        setSubmitting(false);
    };

    return (
        <div className={styles.login}>
            <SectionHeader title="Iniciar Sesión" tag="h1" />
            
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, isValid, values }) => (
                    <Form className={styles['login-form']}>
                        <FormField
                            name="username"
                            label="Usuario"
                            type="text"
                            required
                        />
                        <FormField
                            name="password"
                            label="Contraseña"
                            type="password"
                            required
                        />

                        <Button
                            type="submit"
                            text={isSubmitting ? 'Cargando...' : 'Iniciar sesión'}
                            disabled={isSubmitting || !isValid || !values.username || !values.password}
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

        </div>
    );
};

export default Login;

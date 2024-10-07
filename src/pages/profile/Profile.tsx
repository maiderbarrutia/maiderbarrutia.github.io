//Página de perfil de usuario

// src/components/Profile/Profile.tsx
import React from 'react';
import { useAuth } from '@/context/AuthContext';

const Profile: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <p>Por favor, inicia sesión para ver tu perfil.</p>;
  }

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Estado: {isAuthenticated ? 'Autenticado' : 'No autenticado'}</p>
      <p>Rol: {isAdmin ? 'Administrador' : 'Usuario regular'}</p>
    </div>
  );
};

export default Profile;

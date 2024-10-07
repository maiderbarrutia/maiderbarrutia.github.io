import { useAuth, UserRole } from '@/context/AuthContext';

const useAuthContext = (allowedRoles: string[] = Object.values(UserRole)) => {
  const { isAuthenticated, role, availableRoles } = useAuth();

  const isRoleAllowed = () => {
    // Verifica si el usuario está autenticado y si su rol está permitido
    return isAuthenticated && (allowedRoles.includes(role || '') && availableRoles.includes(role as UserRole));
  };

  return { isAuthenticated, isRoleAllowed };
};

export default useAuthContext;



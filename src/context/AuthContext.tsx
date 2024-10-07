import React, { createContext, useContext, useState } from 'react';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
  Editor = 'editor',
  Viewer = 'viewer'
}

interface Password {
  username: string;
  password: string;
  role: UserRole;
}

interface AuthContextType {
  isAuthenticated: boolean;
  role: UserRole | null;
  username: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  availableRoles: UserRole[];
}

const passwords: Password[] = [
  { username: 'Admin', password: 'test', role: UserRole.Admin },
  { username: 'User', password: 'test', role: UserRole.User },
  { username: 'Editor', password: 'test', role: UserRole.Editor },
  { username: 'Usuario', password: 'test', role: UserRole.Viewer },
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  // Método para iniciar sesión
  const login = (username: string, password: string): boolean => {
    const user = passwords.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setRole(user.role);
      setUsername(user.username);
      return true;
    }

    return false;
  };

  // Método para cerrar sesión
  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);  // Resetea el rol del usuario
    setUsername(null); // Resetea el nombre del usuario al hacer logout
  };

  // Proporciona el contexto a los hijos
  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      role, 
      username, 
      login, 
      logout, 
      availableRoles: Object.values(UserRole)
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

// Simular el módulo de estilos
jest.mock('./Footer.module.scss', () => ({
  footer: 'footer-class', // Nombre de clase simulado
}));

test("Renders the Footer component with current year and privacy link", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear();
    // Usar una expresión regular para buscar el texto
    expect(screen.getByText(new RegExp(`© ${currentYear} \\| Diseñado y codificado por Maider Barrutia`))).toBeInTheDocument();
    expect(screen.getByText('POLÍTICA DE PRIVACIDAD')).toHaveAttribute('href', '/politica-de-privacidad');
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';

// Mock del archivo SVG
jest.mock('@/assets/icons/mai-icon.svg', () => 'mocked-icon-path');

// Mock básico para la función closeMenu
const mockCloseMenu = jest.fn();

describe('HeaderLogo', () => {
  // Prueba para verificar que el logo y el texto se renderizan correctamente
  test('renders the logo and text', () => {
    render(
      <MemoryRouter>
        <HeaderLogo closeMenu={mockCloseMenu} />
      </MemoryRouter>
    );

    // Verifica que el logo y el texto estén presentes
    const logoImage = screen.getByAltText('icono Mai'); // Obtiene la imagen del logo por su atributo alt
    const logoText = screen.getByText('maiWeb'); // Obtiene el texto del logo

    expect(logoImage).toBeInTheDocument(); // Asegura que la imagen del logo está en el documento
    expect(logoText).toBeInTheDocument(); // Asegura que el texto del logo está en el documento
  });

  // Prueba para verificar que se llama a la función closeMenu al hacer clic en el logo
  test('calls closeMenu when logo is clicked', () => {
    render(
      <MemoryRouter>
        <HeaderLogo closeMenu={mockCloseMenu} />
      </MemoryRouter>
    );

    // Simula el clic en el logo
    const logoLink = screen.getByText('maiWeb').closest('a'); // Obtiene el enlace del logo
    fireEvent.click(logoLink!); // Simula el clic

    // Verifica que se haya llamado la función closeMenu con el argumento "/"
    expect(mockCloseMenu).toHaveBeenCalledWith('/'); // Asegura que la función se llama correctamente
  });
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

// Mock del icono del menú
jest.mock('@/assets/icons/menu-icon.svg', () => 'mocked-menu-icon-path');

describe('Header', () => {
  // Test para verificar que el logo y el menú de navegación se renderizan correctamente
  test('renders the logo and navigation menu', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Verifica que el logo esté presente
    const logo = screen.getByAltText('icono Mai');
    expect(logo).toBeInTheDocument();

    // Verifica que el botón del menú esté presente
    const menuButton = screen.getByRole('button', { name: /icono menú/i });
    expect(menuButton).toBeInTheDocument();
  });

  // Test para verificar que el menú se abre al hacer clic en el botón del menú
  test('opens the menu when the menu button is clicked', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Simula el clic en el botón del menú
    const menuButton = screen.getByRole('button', { name: /icono menú/i });
    fireEvent.click(menuButton);

    // Verifica que el menú de navegación está activo
    const navMenu = screen.getByRole('navigation');
    // Aquí se debe cambiar la forma en que se verifica si el menú está activo.
    expect(navMenu).toHaveStyle('display: block'); // Verifica que el menú esté visible
  });

  // Test para verificar que se cierra el menú al hacer clic en un enlace de navegación
//   test('closes the menu when a navigation link is clicked', () => {
//     render(
//       <MemoryRouter>
//         <Header />
//       </MemoryRouter>
//     );
  
//     // Simula el clic en el botón del menú
//     const menuButton = screen.getByRole('button', { name: /icono menú/i });
//     fireEvent.click(menuButton);
  
//     // Simula el clic en el enlace "Sobre mi" del menú
//     const aboutLink = screen.getByText('Sobre mi');
//     fireEvent.click(aboutLink);
  
//     // Verifica que el menú se cierra
//     const navMenu = screen.getByRole('navigation');
  
//     // Asegúrate de que el menú ya no esté visible
//     // Verificamos que el menú no tenga la clase activa o estilo visible
//     expect(navMenu).toHaveStyle('display: none'); // Verifica que el menú no esté visible
//   });
});


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationMenu from '../NavigationMenu/NavigationMenu'; // Asegúrate de poner la ruta correcta al componente

// Comenzamos definiendo pruebas para nuestro componente NavigationMenu
describe('NavigationMenu', () => {
  // Creamos "funciones simuladas" que usarán las pruebas
  const mockCloseMenu = jest.fn(); // Esto simula la función que cierra el menú
  const mockHandleNavigateToSection = jest.fn(); // Esto simula la función que navega a una sección

  // Esto se ejecuta antes de cada prueba para limpiar las simulaciones
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Primera prueba: verificar que el componente muestra los enlaces
  test('should display navigation links', () => {
    render(
      <NavigationMenu 
        closeMenu={mockCloseMenu} 
        handleNavigateToSection={mockHandleNavigateToSection} 
        selectedLink="#about" 
      />
    );

    // Verificamos que los enlaces de navegación están en pantalla
    expect(screen.getByText('Sobre mi')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    expect(screen.getByText('Experiencia')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  // Segunda prueba: verificar que el enlace seleccionado tiene la clase "seleccionada"
  test('should add the --selected class to the selected link', () => {
    render(
      <NavigationMenu 
        closeMenu={mockCloseMenu} 
        handleNavigateToSection={mockHandleNavigateToSection} 
        selectedLink="#projects" 
      />
    );

    // Verificamos que el enlace de "Proyectos" tenga la clase especial que indica que está seleccionado
    const projectsLink = screen.getByText('Proyectos');
    expect(projectsLink).toHaveClass('header__mainMenu-link--selected');
  });

  // Tercera prueba: verificar que se llaman las funciones al hacer clic en un enlace
  test('should call handleNavigateToSection and closeMenu when clicking a link', () => {
    render(
      <NavigationMenu 
        closeMenu={mockCloseMenu} 
        handleNavigateToSection={mockHandleNavigateToSection} 
        selectedLink="#about" 
      />
    );

    // Simulamos un clic en el enlace "Sobre mi"
    const aboutLink = screen.getByText('Sobre mi');
    fireEvent.click(aboutLink);

    // Verificamos que las funciones se llamen con el enlace correcto
    expect(mockHandleNavigateToSection).toHaveBeenCalledWith('#about');
    expect(mockCloseMenu).toHaveBeenCalledWith('#about');
  });
});


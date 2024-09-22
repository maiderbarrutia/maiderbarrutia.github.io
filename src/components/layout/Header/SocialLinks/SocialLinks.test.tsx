import React from 'react';
import { render, screen } from '@testing-library/react';
import SocialLinks from '../SocialLinks/SocialLinks'; // Asegúrate de que la ruta sea correcta
import githubIcon from '@/assets/icons/github-icon.svg';
import linkedinIcon from '@/assets/icons/linkedin-icon.svg';

describe('SocialLinks', () => {
    // Prueba para verificar que los enlaces de redes sociales se muestren
    test('should display social media links', () => {
        render(<SocialLinks />);

        const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
        const githubLink = screen.getByRole('link', { name: /GitHub/i });

        // Verifica que los enlaces estén en el documento
        expect(linkedinLink).toBeInTheDocument();
        expect(githubLink).toBeInTheDocument();
    });

    // Prueba para verificar que los enlaces apunten a las URL correctas
    test('should have the links pointing to the correct URLs', () => {
        render(<SocialLinks />);

        const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i });
        const githubLink = screen.getByRole('link', { name: /GitHub/i });

        // Verifica que los enlaces tengan los atributos href correctos
        expect(linkedinLink).toHaveAttribute('href', 'https://es.linkedin.com/in/maiderbarrutiaunzueta');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/maiderbarrutia');
    });

    // Prueba para verificar que los íconos se rendericen correctamente
    test('should render the icons correctly', () => {
        render(<SocialLinks />);

        const linkedinIconImg = screen.getByAltText('LinkedIn');
        const githubIconImg = screen.getByAltText('GitHub');

        // Verifica que los íconos estén en el documento
        expect(linkedinIconImg).toBeInTheDocument();
        expect(githubIconImg).toBeInTheDocument();

        // Verifica que los íconos tengan la fuente correcta
        expect(linkedinIconImg).toHaveAttribute('src', linkedinIcon);
        expect(githubIconImg).toHaveAttribute('src', githubIcon);
    });
});

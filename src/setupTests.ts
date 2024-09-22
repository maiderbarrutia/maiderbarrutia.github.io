import '@testing-library/jest-dom';

// Mock para window.scrollTo
Object.defineProperty(window, 'scrollTo', {
    value: jest.fn(),
    writable: true,
});
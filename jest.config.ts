module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
      '^.+\\.tsx?$': 'babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mapea estilos para que los tests no fallen
      '\\.(jpg|jpeg|png|svg)$': '<rootDir>/src/__mocks__/fileMock.ts', // Mock para archivos de imagen
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
  



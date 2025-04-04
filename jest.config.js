module.exports = {
    preset: 'ts-jest', // 이게 중요!
    testEnvironment: 'node',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    roots: ['<rootDir>'],
    moduleNameMapper: {
      '@utils/(.*)': '<rootDir>/utils/$1',
      '@datastructure/(.*)': '<rootDir>/datastructure/$1',
    },
  };
  
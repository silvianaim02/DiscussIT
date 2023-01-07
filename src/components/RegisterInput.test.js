/**
 * skenario testing
 *
 * - Register Input component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 *   - should handle name clear typing correctly
 *   - should handle email clear typing correctly
 *   - should handle password clear typing correctly
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import RegisterInput from './RegisterInput';

describe('Register component', () => {
  // test case 1
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');

    // Action
    await userEvent.type(nameInput, 'testnama');

    // Assert
    expect(nameInput).toHaveValue('testnama');
  });

  // test case 2
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'testemail');

    // Assert
    expect(emailInput).toHaveValue('testemail');
  });

  // test case 3
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'testpassword');

    // Assert
    expect(passwordInput).toHaveValue('testpassword');
  });

  // test case 4
  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<RegisterInput register={mockLogin} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'testnama');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'testemail');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'testpassword');
    const registerButton = await screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    await userEvent.click(registerButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      name: 'testnama',
      email: 'testemail',
      password: 'testpassword',
    });
  });

  // test case 5
  it('should handle name clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'testnama');

    // Action
    userEvent.clear(nameInput);

    // Assert
    expect(nameInput).toHaveValue('');
  });

  // test case 6
  it('should handle email clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'testemail');

    // Action
    userEvent.clear(emailInput);

    // Assert
    expect(emailInput).toHaveValue('');
  });

  // test case 7
  it('should handle password clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'testpassword');

    // Action
    userEvent.clear(passwordInput);

    // Assert
    expect(passwordInput).toHaveValue('');
  });
});

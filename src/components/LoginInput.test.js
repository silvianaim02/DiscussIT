/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 *   - should handle email clear typing correctly
 *   - should handle password clear typing correctly
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  // test case 1
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'testemail');

    // Assert
    expect(emailInput).toHaveValue('testemail');
  });

  // test case 2
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'testpassword');

    // Assert
    expect(passwordInput).toHaveValue('testpassword');
  });

  // test case 3
  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'testemail');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'testpassword');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'testemail',
      password: 'testpassword',
    });
  });

  // test case 4
  it('should handle email clear typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'testemail');
    userEvent.clear(emailInput);

    // Assert
    expect(emailInput).toHaveValue('');
  });

  // test case 5
  it('should handle password clear typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // Action
    await userEvent.type(passwordInput, 'testpassword');
    userEvent.clear(passwordInput);

    // Assert
    expect(passwordInput).toHaveValue('');
  });
});

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
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  // test case 1
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    userEvent.type(emailInput, 'testemail');

    // Assert
    await waitFor(() => {
      expect(emailInput).toHaveValue('testemail');
    });
  });

  // test case 2
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    userEvent.type(passwordInput, 'testpassword');

    // Assert
    await waitFor(() => {
      expect(passwordInput).toHaveValue('testpassword');
    });
  });

  // test case 3
  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'testemail');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'testpassword');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Action
    userEvent.click(loginButton);

    // Assert
    waitFor(() => {
      expect(mockLogin).toBeCalledWith({
        email: 'testemail',
        password: 'testpassword',
      });
    });
  });

  // test case 4
  it('should handle email clear typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    userEvent.type(emailInput, 'testemail');
    userEvent.clear(emailInput);

    // Assert
    await waitFor(() => {
      expect(emailInput).toHaveValue('');
    });
  });

  // test case 5
  it('should handle password clear typing correctly', async () => {
    // Arrange
    render(<LoginInput login={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    userEvent.type(passwordInput, 'testpassword');
    userEvent.clear(passwordInput);

    // Assert
    await waitFor(() => {
      expect(passwordInput).toHaveValue('');
    });
  });
});

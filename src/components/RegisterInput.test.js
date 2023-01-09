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
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import RegisterInput from './RegisterInput';

describe('Register component', () => {
  // test case 1
  it('should handle name typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = screen.getByPlaceholderText('Name');

    // Action
    userEvent.type(nameInput, 'testnama');

    // Assert
    await waitFor(() => {
      expect(nameInput).toHaveValue('testnama');
    });
  });

  // test case 2
  it('should handle email typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    userEvent.type(emailInput, 'testemail');

    // Assert
    await waitFor(() => {
      expect(emailInput).toHaveValue('testemail');
    });
  });

  // test case 3
  it('should handle password typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const passwordInput = screen.getByPlaceholderText('Password');

    // Action
    userEvent.type(passwordInput, 'testpassword');

    // Assert
    await waitFor(() => {
      expect(passwordInput).toHaveValue('testpassword');
    });
  });

  // test case 4
  it('should call register function when register button is clicked', async () => {
    // Arrange
    const mockLogin = jest.fn();
    render(<RegisterInput register={mockLogin} />);
    const nameInput = screen.getByPlaceholderText('Name');
    userEvent.type(nameInput, 'testnama');
    const emailInput = screen.getByPlaceholderText('Email');
    userEvent.type(emailInput, 'testemail');
    const passwordInput = screen.getByPlaceholderText('Password');
    userEvent.type(passwordInput, 'testpassword');
    const registerButton = screen.getByRole('button', {
      name: 'Register',
    });

    // Action
    userEvent.click(registerButton);

    // Assert
    waitFor(() => {
      expect(mockLogin).toBeCalledWith({
        name: 'testnama',
        email: 'testemail',
        password: 'testpassword',
      });
    });
  });

  // test case 5
  it('should handle name clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const nameInput = screen.getByPlaceholderText('Name');

    // Action
    userEvent.type(nameInput, 'testnama');
    userEvent.clear(nameInput);

    // Assert
    await waitFor(() => {
      expect(nameInput).toHaveValue('');
    });
  });

  // test case 6
  it('should handle email clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
    const emailInput = screen.getByPlaceholderText('Email');

    // Action
    userEvent.type(emailInput, 'testemail');
    userEvent.clear(emailInput);

    // Assert
    await waitFor(() => {
      expect(emailInput).toHaveValue('');
    });
  });

  // test case 7
  it('should handle password clear typing correctly', async () => {
    // Arrange
    render(<RegisterInput register={() => {}} />);
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

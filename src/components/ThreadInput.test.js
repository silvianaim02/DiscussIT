/**
 * skenario testing
 *
 * - ThreadInput component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call threadInput function when Buat Thread Baru button is clicked
 *   - should handle title clear typing correctly
 *   - should handle category clear typing correctly
 *   - should handle body clear typing correctly
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThreadInput from './ThreadInput';
import store from '../states';

import '@testing-library/jest-dom';

describe('ThreadInput component', () => {
  // test case 1
  it('should handle title typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const titleInput = screen.getByPlaceholderText('judul');

    // Action
    userEvent.type(titleInput, 'testjudul');

    // Assert
    await waitFor(() => {
      expect(titleInput).toHaveValue('testjudul');
    });
  });

  // test case 2
  it('should handle category typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const categoryInput = screen.getByPlaceholderText('kategori');

    // Action
    userEvent.type(categoryInput, 'testkategori');

    // Assert
    await waitFor(() => {
      expect(categoryInput).toHaveValue('testkategori');
    });
  });

  // test case 3
  it('should handle body typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const bodyInput = screen.getByPlaceholderText('beri komentar disini');

    // Action
    userEvent.type(bodyInput, 'testkomentar');

    // Assert
    await waitFor(() => {
      expect(bodyInput).toHaveValue('testkomentar');
    });
  });

  // test case 4
  it('should call threadInput function when Buat Thread Baru button is clicked', async () => {
    // Arrange
    const mockThreadInput = jest.fn();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={mockThreadInput} />
        </Provider>
      </BrowserRouter>
    );
    const titleInput = screen.getByPlaceholderText('judul');
    userEvent.type(titleInput, 'testjudul');
    const categoryInput = screen.getByPlaceholderText('kategori');
    userEvent.type(categoryInput, 'testkategori');
    const bodyInput = screen.getByPlaceholderText('beri komentar disini');
    userEvent.type(bodyInput, 'testkomentar');
    const threadInputButton = screen.getByRole('button', {
      name: 'Buat Thread Baru',
    });

    // Action
    userEvent.click(threadInputButton);

    // Assert

    waitFor(() => {
      expect(mockThreadInput).toBeCalledWith({
        title: 'testjudul',
        category: 'testkategori',
        body: 'testkomentar',
      });
    });
  });

  // test case 5
  it('should handle title clear typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const titleInput = screen.getByPlaceholderText('judul');

    // Action
    userEvent.type(titleInput, 'testjudul');
    userEvent.clear(titleInput);

    // Assert
    await waitFor(() => {
      expect(titleInput).toHaveValue('');
    });
  });

  // test case 6
  it('should handle category clear typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const categoryInput = screen.getByPlaceholderText('kategori');

    // Action
    userEvent.type(categoryInput, 'testkategori');
    userEvent.clear(categoryInput);

    // Assert
    await waitFor(() => {
      expect(categoryInput).toHaveValue('');
    });
  });

  // test case 7
  it('should handle body clear typing correctly', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ThreadInput addThread={() => {}} />
        </Provider>
      </BrowserRouter>
    );
    const bodyInput = screen.getByPlaceholderText('beri komentar disini');

    // Action
    userEvent.type(bodyInput, 'testkomentar');
    userEvent.clear(bodyInput);

    // Assert
    await waitFor(() => {
      expect(bodyInput).toHaveValue('');
    });
  });
});

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
import { render, screen } from '@testing-library/react';
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
    const titleInput = await screen.getByPlaceholderText('judul');

    // Action
    await userEvent.type(titleInput, 'testjudul');

    // Assert
    expect(titleInput).toHaveValue('testjudul');
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
    const categoryInput = await screen.getByPlaceholderText('kategori');

    // Action
    await userEvent.type(categoryInput, 'testkategori');

    // Assert
    expect(categoryInput).toHaveValue('testkategori');
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
    const bodyInput = await screen.getByPlaceholderText('beri komentar disini');

    // Action
    await userEvent.type(bodyInput, 'testkomentar');

    // Assert
    expect(bodyInput).toHaveValue('testkomentar');
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
    const titleInput = await screen.getByPlaceholderText('judul');
    await userEvent.type(titleInput, 'testjudul');
    const categoryInput = await screen.getByPlaceholderText('kategori');
    await userEvent.type(categoryInput, 'testkategori');
    const bodyInput = await screen.getByPlaceholderText('beri komentar disini');
    await userEvent.type(bodyInput, 'testkomentar');
    const threadInputButton = await screen.getByRole('button', {
      name: 'Buat Thread Baru',
    });

    // Action
    await userEvent.click(threadInputButton);

    // Assert
    expect(mockThreadInput).toBeCalledWith({
      title: 'testjudul',
      category: 'testkategori',
      body: 'testkomentar',
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
    const titleInput = await screen.getByPlaceholderText('judul');

    // Action
    await userEvent.type(titleInput, 'testjudul');
    userEvent.clear(titleInput);

    // Assert
    expect(titleInput).toHaveValue('');
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
    const categoryInput = await screen.getByPlaceholderText('kategori');

    // Action
    await userEvent.type(categoryInput, 'testkategori');
    userEvent.clear(categoryInput);

    // Assert
    expect(categoryInput).toHaveValue('');
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
    const bodyInput = await screen.getByPlaceholderText('beri komentar disini');

    // Action
    await userEvent.type(bodyInput, 'testkomentar');
    userEvent.clear(bodyInput);

    // Assert
    expect(bodyInput).toHaveValue('');
  });
});

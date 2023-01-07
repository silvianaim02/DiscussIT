/**
 * skenario testing
 *
 * - Navigation component
 *   - should display avatar when the user has been authenticated
 *   - should hide avatar when the user has not been authenticated
 */

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigation from './Navigation';

describe('Navigation component', () => {
  // test case 1
  it('should display avatar when user has authenticated', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Navigation authUser={{ id: '1' }} signOut={() => {}} />
      </BrowserRouter>
    );
    const avatarImg = await screen.getByAltText('avatar');

    // Assert
    expect(avatarImg).toBeVisible();
  });

  // test case 2
  it('should hide avatar when the user has not been authenticated', async () => {
    // Arrange
    render(
      <BrowserRouter>
        <Navigation authUser={null} signOut={() => {}} />
      </BrowserRouter>
    );
    const avatarImg = await screen.getByRole('img');

    // Assert
    expect(avatarImg).toBeEmptyDOMElement();
  });
});

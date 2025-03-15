// Heading.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For matchers like 'toBeInTheDocument'
import HeaderComponent from '../components/Header';

test('renders the heading on the screen', () => {
  render(<HeaderComponent />);

  // Find the heading on the screen
  const headingElement = screen.getByRole('heading', { name: /hexnode/i });

  // Assert that the heading is in the document
  expect(headingElement).toBeInTheDocument();
});


test('checks if the button is present in the web view', () => {
  // Render the component
  render(<HeaderComponent />);

  // Use getByRole to find the button by its role and name
  // const buttonElement = screen.getByRole('button', { name: /14 DAY FREE TRIAL/i });
  const buttonElement = screen.getByTestId('trial-button');

  // Check if the button is in the document (web view)
  expect(buttonElement).toBeInTheDocument();
});
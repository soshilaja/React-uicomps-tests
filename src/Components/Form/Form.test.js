import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';

describe("Testing for App Components", () => {

    test('renders name text field', () => {
      render(<Form />);
      const inputEl = screen.getByTestId("fname");
      expect(inputEl).toBeInTheDocument();
    });
    
    test('renders subject checkbox', () => {
      render(<Form />);
      const cbEl = screen.getByTestId("subject");
      expect(cbEl).toBeInTheDocument();
    });
    
    test('renders javascript radio', () => {
      render(<Form />);
      const radio = screen.getByTestId("javascript");
      expect(radio).toBeInTheDocument();
    });

});

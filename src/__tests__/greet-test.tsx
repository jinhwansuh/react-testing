/**
 * Greet should render the text Hello and if a name is passed into the component
 * It should render followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greet from '../components/Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name='jin' />);
    const textElement = screen.getByText('Hello jin');
    expect(textElement).toBeInTheDocument();
  });
});

describe('Nested', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });

  test('renders with a name', () => {
    render(<Greet name='jin' />);
    const textElement = screen.getByText('Hello jin');
    expect(textElement).toBeInTheDocument();
  });
});

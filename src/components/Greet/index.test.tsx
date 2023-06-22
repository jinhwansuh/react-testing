/**
 * Greet should render the text Hello and if a name is passed into the component
 * It should render followed by the name
 */

import { render, screen } from '@testing-library/react';
import Greet from '.';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});

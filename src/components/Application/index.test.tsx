import { render, screen } from '@testing-library/react';
import Application from '.';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form',
      level: 1, // h1 h2 구분
    });
    expect(pageHeading).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});

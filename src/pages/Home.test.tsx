import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../components/NavBar.test';

describe('Home', () => {
  it('shows summary', async () => {
    render();

    await userEvent.click(screen.getByRole('button', { name: /chai/i }));

    expect(screen.getByText(/summary/i)).toBeDefined();
    expect(screen.getByText(/DevOps Engineer/i)).toBeDefined();
  });

  it('shows certifications', async () => {
    render();

    await userEvent.click(screen.getByRole('button', { name: /chai/i }));

    expect(screen.getByText(/certifications/i)).toBeDefined();
    expect(screen.getByText(/security specialist/i)).toBeDefined();
  });

  it('shows tech expertise', async () => {
    render();

    await userEvent.click(screen.getByRole('button', { name: /chai/i }));

    expect(screen.getByText(/technical/i)).toBeDefined();
    expect(screen.getByText(/typescript/i)).toBeDefined();
    expect(screen.getByText(/Scripting languages/i)).toBeDefined();
  });

  it('shows education', async () => {
    render();

    await userEvent.click(screen.getByRole('button', { name: /chai/i }));

    expect(screen.getByText(/electronics/i)).toBeDefined();
    expect(screen.getByText(/kansas/i)).toBeDefined();
  });
});

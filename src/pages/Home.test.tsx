import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../components/NavBar.test';

describe('App', () => {
  it('should show app', async () => {
    const r = render();

    await userEvent.click(
      screen.getByRole('button', { name: /Chaitanya Kolluru/i })
    );
    expect(screen.getByText('Summary')).toBeDefined();
    expect(screen.getByText(/DevOps Engineer/i)).toBeDefined();
  });
});

import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../App.test';

describe('App', () => {
  it('should show app', async () => {
    const r = render();

    await userEvent.click(
      screen.getByRole('button', { name: /Chaitanya Kolluru/i })
    );
    expect(screen.getByText('Chaitanya Kolluru')).toBeDefined();
  });
});

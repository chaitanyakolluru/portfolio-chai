import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render } from '../components/NavBar.test';

describe('Professional Experience', () => {
  it('shows aa', async () => {
    render();

    await userEvent.click(
      screen.getByRole('button', { name: /professional/i })
    );

    expect(screen.getByText(/backstage/i)).toBeDefined();
  });

  it('shows sms', async () => {
    render();

    await userEvent.click(
      screen.getByRole('button', { name: /professional/i })
    );

    expect(screen.getByText(/vRAC/i)).toBeDefined();
  });
});

import { render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from './NavBar';

export const render = () => {
  rtlRender(
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

describe('App', () => {
  it('should show app', async () => {
    const r = render();

    await userEvent.click(
      screen.getByRole('button', { name: /Chaitanya Kolluru/i })
    );
    expect(screen.getByText('Chaitanya Kolluru')).toBeDefined();
  });
});

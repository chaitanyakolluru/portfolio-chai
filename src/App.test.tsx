import { render as rtlRender, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

export const render = () => {
  rtlRender(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

describe('App', () => {
  it('should show app', () => {
    const r = render();
    expect(screen.getByText('Chaitanya Kolluru')).toBeDefined();
  });
});

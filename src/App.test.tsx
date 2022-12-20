import { render as rtlRender, screen } from '@testing-library/react';
import App from './App';

const render = () => {
  rtlRender(<App />);
};

describe('App', () => {
  it('should show app', () => {
    const r = render();
    expect(screen.getByText('App')).toBeDefined();
  });
});

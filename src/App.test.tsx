import { render as rtlRender } from '@testing-library/react';
import App from './App';

const render = () => {
  rtlRender(<App />);
};

describe('App', () => {
  it('should show app', () => {
    const r = render();
    expect(r).toContain('App');
  });
});

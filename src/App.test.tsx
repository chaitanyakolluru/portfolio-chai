import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should show app', () => {
    const r = render(<App />);
    expect(r).toContain('App');
  });
});

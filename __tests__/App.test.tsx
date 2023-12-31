import { render } from '@testing-library/react';
import { App } from '../src/App';

test('renders the App component', () => {
  const { getByText } = render(<App />);
  const appElement = getByText('App');
  expect(appElement).toBeInTheDocument();
});
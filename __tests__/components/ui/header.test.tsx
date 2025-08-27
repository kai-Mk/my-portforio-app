import Header from '@/components/ui/header/Header';
import { render, screen } from '@testing-library/react';

describe('header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    expect(screen.getByText('Kaito Mizuuchi')).toBeInTheDocument();
  });
});

import Hero from '@/components/ui/hero/Hero';
import { render, screen } from '@testing-library/react';

describe('header component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
    expect(screen.getByText('ご覧いただきありがとうございます。')).toBeInTheDocument();
  });
});

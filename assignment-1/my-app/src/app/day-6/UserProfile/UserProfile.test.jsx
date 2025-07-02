import { render, screen } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
  it('should render user name, email, and phone correctly', () => {
    render(
      <UserProfile
        name="Alice Smith"
        email="alice@example.com"
        phone="9876543210"
      />
    );

    expect(screen.getByText('Alice Smith')).toBeInTheDocument();
    expect(screen.getByText(/alice@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/9876543210/i)).toBeInTheDocument();
  });
});
import { render, screen } from '@testing-library/react';
import App from '../public/src/components/App';
import Home from '../public/src/components/Home';
import Profile from '../public/src/components/Profile';
import ToDoList from '../public/src/components/ToDoList';
import AboutUs from '../public/src/components/AboutUs';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Homepage component', () => {
  render(<Homepage />);
  const welcomeMessage = screen.getByText('Welcome to the To-Do List App');
  expect(welcomeMessage).toBeInTheDocument();
});

test('renders Profile component', () => {
  render(<Profile />);
  const profileTitle = screen.getByText('Profile');
  expect(profileTitle).toBeInTheDocument();
  // You can add more specific tests for profile fields and inputs.
});

test('renders TodoList component', () => {
  render(<TodoList />);
  const todoTitle = screen.getByText('To-Do List');
  expect(todoTitle).toBeInTheDocument();
  // You can add more specific tests for the todo list and interactions.
});

test('renders AboutUs component', () => {
  render(<AboutUs />);
  const aboutUsTitle = screen.getByText('About Us');
  expect(aboutUsTitle).toBeInTheDocument();
  // You can add more specific tests for about us content.
});

// Navigation.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

test('renders Navigation component', () => {
  render(<Navigation />);
  const homepageLink = screen.getByText('Homepage');
  expect(homepageLink).toBeInTheDocument();
});

test('clicking the Login button triggers login action', () => {
  render(<Navigation />);
  const loginButton = screen.getByText('Log In');
  fireEvent.click(loginButton);
});

test('clicking the Login button triggers login action', () => {
  render(<Login />);
  const loginButton = screen.getByText('Log in');
  fireEvent.click(loginButton);
  // You can add more assertions here to verify the login behavior.
});

test('clicking the Logout button triggers logout action', () => {
  render(<Logout />);
  const logoutButton = screen.getByText('Log Out Here');
  fireEvent.click(logoutButton);
  // You can add more assertions here to verify the logout behavior.
});

// You can write similar tests for other components.

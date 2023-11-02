import { render } from '@testing-library/react';
import Home from '../components/Home';
import Profile from '../components/Profile';
import ToDoList from '../components/ToDoList';
import AboutUs from '../components/AboutUs';

test('renders Home component', () => {
  render(<Home />);
});

test('renders Profile component', () => {
  render(<Profile />);
});

test('renders ToDoList component', () => {
  render(<ToDoList />);
});

test('renders AboutUs component', () => {
  render(<AboutUs />);
});
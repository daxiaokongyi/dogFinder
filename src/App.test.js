import { render} from '@testing-library/react';
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import {dogs} from './App';
import DogDetails from './DogDetails';
import NavBar from './NavBar';

test('renders without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

test('renders only a dog named as perry', () => {
  const {getByText} = render(
    <MemoryRouter initialEntries={["/dogs/perry"]}>
      <DogDetails dogs = {dogs} />
    </MemoryRouter>
  );
  expect(getByText("Age: 4")).toBeInTheDocument();
});

test('/dogs route', () => {
  const {getByText} = render((
    <MemoryRouter initialEntries={['/dogs']}>
      <NavBar dogs = {dogs} />
    </MemoryRouter>
  ));
  expect(getByText("Whiskey")).toBeInTheDocument();
})



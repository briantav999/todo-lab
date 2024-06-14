
import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '.../src/components/TodoList';

test('renders todos', () => {
  const todos = ['Todo 1', 'Todo 2'];
  const { getByText } = render(<TodoList todos={todos} />);
  
  expect(getByText('Todo 1')).toBeInTheDocument();
  expect(getByText('Todo 2')).toBeInTheDocument();
});

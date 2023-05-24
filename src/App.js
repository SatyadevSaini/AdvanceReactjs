import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 't1',
    title: 'Food-Momos',
    amount: 18.12,
    date: new Date(2019, 7, 14),
  },
  {
    id: 'shj1',
    title: 'Movie-Green Vally',
    amount: 194.12,
    date: new Date(2019, 7, 6),
  },
  {
    id: 'e13',
    title: 'FaceWash-Haldi',
    amount: 75.12,
    date: new Date(2020, 7, 28),
  },
  {
    id: 'e13',
    title: 'Tracking',
    amount: 775.12,
    date: new Date(2020, 3, 8),
  },
  {
    id: 'e13',
    title: 'Jumping',
    amount: 75.12,
    date: new Date(2020, 9, 2),
  },
  {
    id: 'er',
    title: 'Food-Panner Roti',
    amount: 100.98,
    date: new Date(2021, 1, 14),
  },
  {
    id: 'e1d',
    title: 'Tracking-Dehradun',
    amount: 1234.89,
    date: new Date(2021, 4, 14),
  },
  {
    id: 'ehj1',
    title: 'Car-VX29',
    amount: 150056.8,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  {
    id: 'e31',
    title: 'Dust Paper',
    amount: 44.12,
    date: new Date(2023, 4, 24),
  },
  {
    id: 'e1rr',
    title: 'Movie Date ',
    amount: 194.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e1er',
    title: 'Gedian',
    amount: 294.12,
    date: new Date(2019, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
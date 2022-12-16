import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import {App} from '../App';
import ConfigPage from '../pages/Config';
import HomePage from '../pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/config',
        element: <ConfigPage />,
      },
    ],
  },
], {basename: '/'});

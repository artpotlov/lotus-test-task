import React from 'react';
import {Outlet} from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from './store/store';

export const App = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </ChakraProvider>
  );
};

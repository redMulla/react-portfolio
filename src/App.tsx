import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
  ])

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

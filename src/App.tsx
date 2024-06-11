import React from 'react';
import './App.css';
import { ChakraProvider, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';


const config: ThemeConfig = {
    initialColorMode: 'system',
  }
export const theme = extendTheme({config})


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {

    }
  ]);

  


  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}



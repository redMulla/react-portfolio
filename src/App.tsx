import React from 'react';
import './App.css';
import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import '@fontsource/nunito-sans';
import '@fontsource/roboto-condensed';

const config: ThemeConfig = {
  initialColorMode: 'system',
};
export const theme = extendTheme({
  config,
  fonts: {
    heading: `'Nunito Sans', sans-serif`,
    body: `'Roboto Condensed', sans-serif`,
  },
});

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {},
  ]);

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

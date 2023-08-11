import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import theme from './utils/theme.js';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <RouterProvider router={router}> */}
      <App />
      <CssBaseline />
      {/* </RouterProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);

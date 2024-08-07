import { createRoot } from 'react-dom/client'
import Header from './components/Header.tsx'
import { RouterProvider } from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import router from './routes/Router.tsx';

import "./global.css"

import '@radix-ui/themes/styles.css';

createRoot(document.getElementById('root')!).render(
  <Theme>
    <Header />
    <RouterProvider router={router} />
  </Theme>
)

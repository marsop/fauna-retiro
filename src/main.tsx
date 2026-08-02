import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashHistory } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import './i18n'
import { router } from './router'
import { ThemeProvider } from './components/theme-provider'

const hashHistory = createHashHistory()
router.update({ history: hashHistory })

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="fauna-quest-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

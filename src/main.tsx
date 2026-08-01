import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashHistory } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { router } from './router'

const hashHistory = createHashHistory()
router.update({ history: hashHistory })

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

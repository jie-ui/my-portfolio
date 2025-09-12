

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './layout/layout.jsx'
import AppRoutes from './routes/AppRoutes.jsx'


export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <AppRoutes />
    </BrowserRouter>
  )
}

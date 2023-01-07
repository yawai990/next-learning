import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import FAQ from './pages/FAQ';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/faqs',
        element: <FAQ />
      }
    ],
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

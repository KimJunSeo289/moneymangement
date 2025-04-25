import { createBrowserRouter } from 'react-router-dom'
import Default from './layout/Default'
import MainPage from './Page/MainPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Default />,
      children: [{ path: '', element: <MainPage /> }],
    },
  ],
  {
    basename: '/moneymangement',
  }
)

export default router

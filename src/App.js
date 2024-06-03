import './App.scss';
import { Home, MenuBar } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './context/store';
import { Provider } from 'react-redux';
import {
  HomeContent,
  PaymentContent,
  ScheduleContent,
  StudentDashboard,
} from './pages/Student';
import { AdminDashboard } from './pages/Admin';
import { AdminRoute, ProtectedRoute, StudentRoute } from './components/routes';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '',
    element: (
      <div>
        <MenuBar />
        <Home />
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/student',
    element: (
      <ProtectedRoute>
        <StudentRoute>
          <StudentDashboard />
        </StudentRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      { path: 'home', element: <HomeContent /> },
      { path: 'payment', element: <PaymentContent /> },
      { path: 'schedule', element: <ScheduleContent /> },
    ],
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;

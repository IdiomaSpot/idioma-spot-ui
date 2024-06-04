import { createBrowserRouter } from 'react-router-dom';
import { AdminRoute, ProtectedRoute, StudentRoute } from './components/routes';
import { AdminDashboard } from './pages/Admin';
import { Home, MenuBar } from './pages/Home';
import { Login } from './pages/Login';
import NotFound from './pages/NotFound';
import { Signup } from './pages/Signup';
import {
  ClassesContent,
  Enrollment,
  HomeContent,
  PaymentContent,
  StudentDashboard,
} from './pages/Student';

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
      { path: 'my-classes', element: <ClassesContent /> },
      { path: 'enrollment', element: <Enrollment /> },
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

export default router;

import { createBrowserRouter } from 'react-router-dom';
import { AdminRoute, ProtectedRoute, StudentRoute } from './components/routes';
import { AdminDashboard, MarketingCampaigns, Payments } from './pages/Admin';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import NotFound from './pages/NotFound';
import { Signup } from './pages/Signup';
import {
  ClassesContent,
  Enrollment,
  HomeContent,
  PaymentContent,
  StudentDashboard,
  ProcessPayment,
} from './pages/Student';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
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
      { path: 'process-payment', element: <ProcessPayment /> },
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
    children: [
      {
        index: true,
        element: <MarketingCampaigns />,
      },
      { path: 'marketing', element: <MarketingCampaigns /> },
      { path: 'payments', element: <Payments /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;

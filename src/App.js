import './App.scss';
import { Home, MenuBar } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './context/store';
import { Provider } from 'react-redux';

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

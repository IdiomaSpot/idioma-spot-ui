import { RouterProvider } from 'react-router-dom';
import './App.scss';
import store from './context/store';
import { Provider } from 'react-redux';
import router from './routing';

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

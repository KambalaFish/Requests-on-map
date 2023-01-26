import { createRoot } from 'react-dom/client';
import App from './components/App';
import { store } from '@redux/store';
import { Provider } from 'react-redux';

const appNode = document.querySelector('#app');

if (appNode) {
  const root = createRoot(appNode);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

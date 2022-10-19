import { Provider } from 'react-redux'
import { Cart } from './components/Cart';
// COMPONENTS //
import { Catalog } from './components/Catalog';
// STORE //
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />

      <hr />

      <Cart />
    </Provider>
  );
}

export default App;

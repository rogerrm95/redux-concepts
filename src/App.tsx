import { Provider } from 'react-redux'
// COMPONENTS //
import { Catalog } from './components/Catalog';
// STORE //
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
}

export default App;


import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import {Provider} from "react-redux";
import appStore from './redux/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
          <Header />
          <Outlet />
      </Provider>
    </div>
  );
}

export default App;

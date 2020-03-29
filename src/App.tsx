import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/App.scss';
import PhotoProvider from './context/PhotoProvider';
import Header from './components/Header/Header';
import PhotoListContainer from './components/PhotoList/PhotoListContainer';
import DetailsPhotosContainer from './components/DetailsPhoto/DetailsPhotosContainer';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <PhotoProvider>
      <Header />
      <Router>
        <Switch>
          <Route path="/photo/:id">
            <DetailsPhotosContainer />
          </Route>
          <Route path="/">
            <PhotoListContainer />
          </Route>
        </Switch>
      </Router>
      </PhotoProvider>

    </div>

  );
}

export default App;

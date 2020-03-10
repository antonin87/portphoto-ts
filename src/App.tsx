import React from 'react';
import './App.css';
import PhotoProvider from './context/PhotoProvider';
import PhotoListContainer from './components/PhotoListContainer';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <PhotoProvider>
        <PhotoListContainer />
      </PhotoProvider>
    </div>
  );
}

export default App;

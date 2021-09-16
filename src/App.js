import React, { Component } from 'react';

import Blog from './containers/Blog/Blog';

export const PostAPI = React.createContext();

const App = () => {

    return (
      <div className="App">
        <PostAPI.Provider value = {'http://localhost:8080/post'}>
          <Blog />
        </PostAPI.Provider>
      </div>
    );
  }

export default App;

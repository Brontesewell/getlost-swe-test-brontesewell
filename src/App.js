import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers/combineReducers';
import { createStore, applyMiddleware, compose } from 'redux';
import './App.css';
import Navbar from './components/Navbar'
import MovieHome from './components/MovieHome';

// import rootReducer from './reducers';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import { PersistGate } from 'redux-persist/lib/integration/react';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel2,
//   whitelist: ['movies', 'subject']
//   };
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const store = createStore(
//   persistedReducer, composeEnhancers(
//     applyMiddleware(...middleware)
//   ));
// const persistor = persistStore(store);


const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);



class App extends Component {
  render() {
    console.log()
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Router>
          <div>
            <Navbar/>
            <MovieHome />
          </div>
        </Router>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}


export default App;
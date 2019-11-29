import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchComments } from "./util/comment_api_util";
import UIfx from 'uifx';
import Hitmarkers from './audio/hitmarker_2.mp3';

const hitmarkers = new UIfx({asset: Hitmarkers})



document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser } };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById('root');
  window.getState = store.getState;
  window.fetchComments = fetchComments;

  window.addEventListener('click', () => {
    hitmarkers.play()
  });
  
  ReactDOM.render(<Root store={store} />, root);
});



// Things I need to do.
// create components
//  header
//  sidebar left
//  add new meal component (this will be a form to add new meals)
//  add meals component (this will have a dropdown and a submit/click button)
//  menu schedule (this will have monday, tues, etc with the meals for those days) 
//  sign up form
//  sign in form
// create actions add_to_menu, remove_from_menu
// create reducers
// create store



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import './css/skeleton.css';

import store from './Store';
import Home from './components/Home';
import Menu from './components/Menu';
import NewMenu from './components/NewMenu';
import AddNewMeal from './components/AddNewMeal';
import { fetchMenus } from './actions/menuActions';

//hydrate state

store.dispatch(fetchMenus());

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/menu/new" component={NewMenu}></Route>
        <Route path="/menu/:menuId" component={Menu}></Route>
        <Route path="/meal/new" component={AddNewMeal}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

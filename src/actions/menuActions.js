//STOPPED HERE
// check the state. when running getState() it returns 
// Object {menus: Object}
// to get to the object you have to do .menus then .menus again.
import fetch from 'isomorphic-fetch';

export const REQUEST_MENUS = 'REQUEST_MENUS';
export const FETCH_MENUS = 'FETCH_MENUS';
export const RECEIVE_MENUS = 'RECEIVE_MENUS';

const base_url = 'http://localhost:3004';

//for now I am defaulting user to blank object {}
// user should be the token after logging in.
function requestMenus(user={}) {
  console.log("request menu action");
  return {
    type: REQUEST_MENUS,
    user
  }
}

function receiveMenus(user={}, json) {
  console.log("receive menu action");
  // debugger
  return {
    type: RECEIVE_MENUS,
    user,
    menus: json
  }
}

export function fetchMenus(user={}) {
  return function(dispatch){
    dispatch(requestMenus(user))

    return fetch(`${base_url}/menus`)
      .then(response => response.json())
      .then(json => 
        dispatch(receiveMenus(user, json))
      )
      .catch((error) => {
        console.log(error);
      })
  }
}

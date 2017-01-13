import { RECEIVE_MENUS } from '../actions/menuActions';

const INITIAL_STATE = {}

function menus(state = INITIAL_STATE, action) {
  switch(action.type) {
    case RECEIVE_MENUS:
      // debugger;
      return Object.assign({}, state, {
        menus: action.menus
      })
    default:
      return state;
  }
}

export default menus;

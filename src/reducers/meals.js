import { ADD_MEAL_TO_MENU, REMOVE_MEAL_FROM_MENU } from './actions';

function postMeals (state=[], action) {
  switch(action.type) {
    case ADD_MEAL_TO_MENU:
      // need to implement
      return state;
    case REMOVE_MEAL_FROM_MENU:
    // need to implement
      return state;
    default:
      return state;
  }
}

// this is an example from learn redux tutorial for posts and comments
// {posts: [], comments: []} 
//
// our state should look something like this
// {menus: [], meals[]}
// where menus will contain objects with id, menu name
// where meals will contain objects with id, menu id, meal name

// {
//   isFetching: false,
//   lastUpdated: 122222,
//   menus: [
//     {
//       id:1
//       name: "something"
//     }
//   ],
//   meals: [
//     {
//       id:1
//       menuId: 1
//       name: "chicken"
//     }
//   ]
// }

function meals(state = [], action) {
  if(typeof action.menuId !== 'undefined'){
    // this is probably wrong. Rewrite from the explanation above.
    return {
      ...state,
      [action.mealId]: postMeals(state[action.menuId], action)
    }
  }
}
export default meals;

// user logs in
// fetches menus or creates menu
// user adds new meals
// user adds meals to menu

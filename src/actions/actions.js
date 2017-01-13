export const ADD_MEAL_TO_MENU = 'ADD_MEAL_TO_MENU'
export const REMOVE_MEAL_FROM_MENU = 'REMOVE_MEAL_FROM_MENU'


export function addMealToMenu(menuId, meal) {
  return {
    type: ADD_MEAL_TO_MENU,
    menuId,
    meal
  }
}

export function removeMealToMenu(mealId, i) {
  return {
    type: REMOVE_MEAL_FROM_MENU,
    mealId,
    i
  }
}

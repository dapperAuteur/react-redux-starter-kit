// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_VISITS_COUNT = 'DASHBOARD_VISITS_COUNT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type: DASHBOARD_VISITS_COUNT,
    payload: value
  }
}

export function dashboardAddItem (value) {
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardEditItem (value) {
  return {
    type: DASHBOARD_EDIT_ITEM,
    payload: value
  }
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_VISITS_COUNT]: (state, action) => {
    state.visitsCount = state.visitsCount + action.payload
    return Object.assign({}, state)
  },
  [DASHBOARD_ADD_ITEM]: (state, action) => {
    const mockedId = Math.floor(Date.now() / 1000)
    const newItem = {
      label: action.payload,
      id: mockedId
    }
    state.dashboardItems.push(newItem)
    return Object.assign({}, state)
  },
  [DASHBOARD_EDIT_ITEM]: (state, action) => {
    const newLabel = action.payload.val
    const index = action.payload.editedItemIndex
    state.dashboardItems[index].label = newLabel
    return Object.assign({}, state)
  }
}
// const ACTION_HANDLERS = {
//   [DASHBOARD_VISITS_COUNT]: (state, action) => {
//     return Object.assign
//   }
// }
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitsCount: 0,
  dashboardItems: [
    {key: 0, label: "Angular"},
    {key: 1, label: "JQuery"},
    {key: 2, label: "Polymer"},
    {key: 3, label: "ReactJS"}
  ]
}

export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

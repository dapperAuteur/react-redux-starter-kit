// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_VISITS_COUNT = 'DASHBOARD_VISITS_COUNT'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type: DASHBOARD_VISITS_COUNT,
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
  }
}

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

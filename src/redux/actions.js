
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS,
    reducer: setIsFetching(true)
  }
}

const setIsFetching = (newValue) => {
  return (state) => Object.assign({}, state, {
      isFetching: newValue
    })
}
function receiveApps(newApps) {
  return {
    type: RECEIVE_APPS,
    reducer: assignNewValue('apps',newApps)
  }
}
const assignNewValue = (key,newValue) => {
  return (state) => {
    return Object.assign({}, state, {
      isFetching: false,
      [key]: newValue
    })
  }
}

function fetchApps() {
  return dispatch => {
    dispatch(requestApps())
    return fetch(`assets/data.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}
function fetchSwapi(){
  return dispatch => {
    dispatch(requestSwapi())
    return fetch('https://swapi.co/api/people/1')
    .then(response => response.json())
    .then(json => dispatch(receiveSwapi(json)))
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length == 0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}

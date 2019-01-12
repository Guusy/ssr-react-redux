const initialState = {isFetching: false, apps: []}

function apps(state = initialState  , { reducer = (state) => state }){
  return reducer(state);
}

export default apps

const redux = require('redux')
const createStore = redux.legacy_createStore
const BUY_CAKE= 'BUY_CAKE'

//Action function
// have type property
// which define the type of action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux application'
    }
}

// make reducer
//const reducer = (previousState, action) => newState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// makes the redux store

const store = createStore(reducer)
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe();

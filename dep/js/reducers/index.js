import { combineReducers } from 'redux'

const todoApp = combineReducers({
    dealNumber: (state, action) => {
        switch (action.type) {
            case 'ADD':
                return action;
            default:
              return Object.assign({
                    type: 'SET',
                    count: 0
              }, state)
        }
    }
})

export default todoApp
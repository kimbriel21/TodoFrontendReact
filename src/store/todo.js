const initialState = {
    todoStore : 0,
}

const todo = (state = initialState, action) =>{
    switch(action.type) {
        case 'STORETODO':
            return {
                ...state,
                todoStore : action.data,
            }
        default :
            return state;
    }

}

export default todo;
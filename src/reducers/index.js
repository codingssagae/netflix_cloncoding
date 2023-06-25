const initialState = {
    todoList:[],
};

const rootReducer = (state = initialState , action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                todoList:[...state.todoList, action.payload]
            };
        default:
            return state;
    }
};


export default rootReducer;
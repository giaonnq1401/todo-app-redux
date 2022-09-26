// REDUCERS
// là 1 function
const initValue = {value: 0};
const rootReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };

        case 'todoList/increment':
            return {
                ...state,
                value: state.value + action.payload
            }
            //time-travel debugging

        //PURE FUNCTION
        // predictable

            default:
                return state;
    }
}

// ACTION

const INCREMENT = {
    type: 'todoList/increment',
    payload:10
}
    // Action creators
    const incrementCreator = (data) => {
        return {
            type: 'todoList/increment',
            payload: data,
        };
    }

    incrementCreator(10);
 

//DISPATCH
//là 1 function

dispatch(incrementCreator(15));
const initialState = {
    height: 50,
    width: 50,
    x: 0,
    y: 0,
    name: 'defaultName'
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'socket/movementUpdate':
            console.log(action.data);
            return {
                ...state,
                x: action.data.x,
                y: action.data.y
            };
        default:
            return state;
    }
}

export default reducer;
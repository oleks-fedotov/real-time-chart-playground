function reducer(state = {values: []}, action) {
    switch (action.type) {
        case 'socket/timelineUpdate':
            const date = new Date(action.data.date).valueOf();
            const value = action.data.value;

            let values = [...state.values, [date, value]];
            values = values.slice(-10);

            return {
                ...state,
                values
            };
        default:
            return state;
    }
}

export default reducer;
let nextItemId = 0;

const items = (state = [], action) => {

    switch (action.type) {

        case "ADD_ITEM": {
            return [
                ...state,
                {
                    id: nextItemId++,
                    name: action.name,
                    bgColor: action.bgColor
                }
            ];
        }
        case "REMOVE_ITEM": {
            const index = state.findIndex(x => x.id === action.id);
            return [...state.slice(0, index), ...state.slice(index+1)];
        }
        default:
            return state;
    }

};

export default items;
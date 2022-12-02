const supabaseReducer = (state, action) => {
    switch (action.type) {
        case 'UPLOAD_FILE':
            return {
                ...state,
                loading: false,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'GET_IMAGES':
            return {
                ...state,
                images: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default supabaseReducer;

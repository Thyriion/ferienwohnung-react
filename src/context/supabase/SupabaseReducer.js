const supabaseReducer = (state, action) => {
    switch (action.type) {
        case 'UPLOAD_FILE':
            return {
                ...state,
                editLoading: false,
            };
        case 'SET_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'SET_EDIT_LOADING':
            return {
                ...state,
                editLoading: action.payload,
            };
        case 'GET_IMAGES':
            return {
                ...state,
                images: action.payload,
                loading: false,
            };
        case 'DELETE_FILE':
            return {
                ...state,
                editLoading: false,
            };
        case 'GET_USER_DATA':
            return {
                ...state,
                user: action.payload,
            };
        case 'SIGN_OUT': {
            return {
                ...state,
                loading: false,
                user: {},
            };
        }
        default:
            return state;
    }
};

export default supabaseReducer;

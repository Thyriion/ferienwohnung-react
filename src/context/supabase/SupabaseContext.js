import { createContext, useReducer } from 'react';
import supabaseReducer from './SupabaseReducer';

const SupabaseContext = createContext();

export const SupabaseProvider = ({ children }) => {
    const initialState = {
        images: [],
        loading: false,
        user: {},
    };

    const [state, dispatch] = useReducer(supabaseReducer, initialState);

    return (
        <SupabaseContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SupabaseContext.Provider>
    );
};

export default SupabaseContext;

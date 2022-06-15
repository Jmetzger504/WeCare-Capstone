import { configureStore } from "@reduxjs/toolkit";
import {userLogin} from '../reducers/reducerIndex'

export const store = configureStore({
    reducer: {
        user: userLogin
    }
});
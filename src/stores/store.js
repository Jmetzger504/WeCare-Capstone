import { configureStore } from "@reduxjs/toolkit";
import {login} from '../reducers/reducerIndex'

export const store = configureStore({
    reducer: {
        user: login
    }
});
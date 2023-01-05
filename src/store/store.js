import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, calendarSlice, authSlice } from './';


export const store = configureStore({
    reducer: {
        authSlice:     authSlice.reducer,
        calendarSlice: calendarSlice.reducer,
        uiSlice:       uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

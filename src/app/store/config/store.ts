import { ReducersMapObject } from 'redux';
import { StateSchema } from '@/app/store/config/StateSchema';
import { configureStore } from '@reduxjs/toolkit';
import { NoteReducer } from '@/app/store/reducers/NoteSlice';
import { SearchReducer } from '@/app/store/reducers/SearchSlice';
import { FilterReducer } from '@/app/store/reducers/FilterSlice';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        notes: NoteReducer,
        search: SearchReducer,
        filter: FilterReducer,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

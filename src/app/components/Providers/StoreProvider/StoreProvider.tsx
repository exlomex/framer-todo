import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore, StateSchema } from '@/app/store/config';

interface StoreProviderProps {
    children: ReactNode;
    initialState?: Partial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>{children}</Provider>
    );
};

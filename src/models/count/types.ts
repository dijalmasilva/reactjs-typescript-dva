export enum CountTypes {
    ADD = 'count/add',
    MINUS = 'count/minus',
    ADD_THEN_MINUS = 'count/addThenMinus'
}

export interface CountState {
    record: number;
    current: number;
}

export interface CountSubscriptions {
    keyboardWatch: ({ dispatch }: any) => void
}

export interface CountEffects {
    addThenMinus: (action: any, { call, put }: { call: any; put: any; }) => Generator<any, void, unknown>
}

export interface CountReducers {
    add: (state: CountState) => CountState
    minus: (state: CountState) => CountState
}
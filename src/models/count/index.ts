import key from 'keymaster';
import {ModelStructure} from "../../model-interface";
import {CountEffects, CountReducers, CountState, CountSubscriptions, CountTypes} from "./types";
import {action as actionSafe} from "typesafe-actions";

const state: CountState = {
    record: 0,
    current: 0
}

const reducers: CountReducers = {
    add(state) {
        const newCurrent = state.current + 1;
        return {
            ...state,
            record: newCurrent > state.record ? newCurrent : state.record,
            current: newCurrent
        }
    },
    minus(state) {
        return {...state, current: state.current - 1}
    }
}

const subscriptions: CountSubscriptions = {
    keyboardWatch({dispatch}) {
        key('⌘+up, ctrl+up', () => { dispatch(actionSafe(CountTypes.ADD_THEN_MINUS))})
    },
}

const effects: CountEffects = {
    * addThenMinus(action, {call, put}) {
        yield put(actionSafe(CountTypes.ADD))
        yield call(delay, 1000)
        yield put(actionSafe(CountTypes.MINUS))
    }
}

function delay(timeout: number) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}

const CountModel : ModelStructure = {
    namespace: 'count',
    state,
    reducers,
    subscriptions,
    effects,
}

export default CountModel
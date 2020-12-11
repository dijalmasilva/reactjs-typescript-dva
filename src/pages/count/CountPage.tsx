// @ts-ignore
import './count.scss';

import React from 'react';
import {connect} from "dva";
import {action} from 'typesafe-actions';

import {CountState, CountTypes} from "../../models/count/types";
import {StateHome} from "../../index";

type Props = {
    count: CountState
    dispatch: any
}

const Counter: React.FC<Props> = ({count, dispatch}) => {

    const handleClick = () => {
        dispatch(action(CountTypes.ADD_THEN_MINUS))
    }

    return (
        <div className="normal">
            <div className="record">Highest Record: {count.record}</div>
            <div className="current">{count.current}</div>
            <div className="button">
                <button onClick={handleClick}>+</button>
            </div>
        </div>
    )
}

function mapStateToProps(state: StateHome) {
    return { count: state.count }
}

export default connect(mapStateToProps)(Counter)

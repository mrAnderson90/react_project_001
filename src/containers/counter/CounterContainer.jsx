import config from '../../config';
import { actions, selectors } from '../../store/counter';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function CounterContainer() {
  const counter = useSelector(selectors.selectCounter);
  const dispatch = useDispatch();
  return (
    <div>
      <p>qte create-react-app-template</p>
      <p>Config string: {config.EXAMPLE}</p>
      <p>Counter: {counter}</p>

      <button onClick={() => dispatch(actions.decreaseAction())}>-</button>
      <button onClick={() => dispatch(actions.increaseAction())}>+</button>
    </div>
  );
}

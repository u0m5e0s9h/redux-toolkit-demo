import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const status = useSelector((state) => state.counter.status);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <h2>Count: {count}</h2>
      <h4>Status: {status}</h4>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <input
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmount) || 0))
        }
      >
        Add Amount
      </button>
      <button
        onClick={() =>
          dispatch(incrementAsync(Number(incrementAmount) || 0))
        }
      >
        Add Async
      </button>
    </div>
  );
}

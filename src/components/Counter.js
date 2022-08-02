import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementbyamount, decrementbyamount } from '../redux/counter/counterSlice';

function Counter() {
    const [amount, setAmount] = useState(0);
    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h1>{countValue}</h1>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <button onClick={() => dispatch(decrementbyamount(amount))}>Decrement by Amount</button>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementbyamount(amount))}>Increment by Amount</button>
        </>
    );
}

export default Counter
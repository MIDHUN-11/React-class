import {useState} from 'react';
import Store from './Redux/Store';
const Counter=()=>{
    // let count=0;
    function incrementFun(){
        // count=count+1;
        // setCount(count+1);
       const dis= Store.dispatch({
            type: 'INCREMENT',
            val:2
          });
          setCount(Store.getState());
        console.log("disp",dis);
    }
    const[count,setCount]=useState(0);
    console.log("store.getstate ",Store.getState());
    return(
        <>
            <h1>Counter</h1>
            <button onClick={incrementFun} >+</button>
            <h3>{Store.getState()}</h3>
            <button onClick={()=>{
                 Store.dispatch({
                    type: 'DECREMENT'
                  });
                  setCount(Store.getState());
            }}>-</button>
        </>
    )
}
export default Counter;
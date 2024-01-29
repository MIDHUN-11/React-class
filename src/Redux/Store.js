import { createStore } from 'redux';
const initialState = {
    count: 0,
}
const reducer = (state = 0, action) => {
    if (action.type === 'INCREMENT') {
            return state + action.val;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    }
}
const Store = createStore(reducer, 0);

Store.subscribe(() => {
    console.log("currentstate", Store.getState());
});
export default Store;
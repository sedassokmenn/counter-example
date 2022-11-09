import * as actionTypes from "../actions/actionTypes"

const counterReducer = (state = 10, action) => {
    //bütün reducerlar bizim çağırdığımız aksiyonu içerip içermediğine bakacak,state ise reducerimizin yapacağı
    //aksiyona göre state belirlemek yani state i kontrol ettiğimiz yer burası.
    //reducerin içinde vt ye , apiye bağlanılmaz.
    //reducerin içinde state yönetimi YAPILIR.

    let newState;
    switch (action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload)

        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload)

        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload)

        default:
            return state;
    }
};

export default counterReducer; 
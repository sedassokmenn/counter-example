import * as actionTypes from "./actionTypes"

export const increaseCounter=()=>({
    type:actionTypes.INCREASE_COUNTER,
    payload:1
})//bizim aksiyonumuz aslında bir fonksiyondur, o fonksiyonun parametresi de bunlar.

export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})

export const increaseByTwoCounter=()=>({
    type:actionTypes.INCREASE_BY_TWO_COUNTER,
    payload:2 // 2 2 artacağı için 
})
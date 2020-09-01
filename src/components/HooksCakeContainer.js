import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer(){
    //mapStateToProps와 같은 역할. state에 접근해서 값을 가져옴
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of cakes - {numOfCakes} </h2>
            <button onClick = {() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}


export default HooksCakeContainer
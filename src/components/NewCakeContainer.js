import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props){
    const [number, setNumber] = useState(1)
    return(
        <div>
            <h2>Number of cakes - {props.numOfCakes} </h2>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
            <button onClick = {()=> props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

//현재 상태값을 prop으로 전달
const mapStateTopProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

//현재 상태값을 prop으로 전달
const mapDispatchToProps = dispatch => {
    return{
        buyCake: number => dispatch(buyCake(number))
    }
}

//CakeContainer와 redux를 연결시킴
//mapStateToProps : store내 state를 어떻게 props와 연결할 건지 정의 (필요한 것만 선별하여 props에 남길 수 있도록)
//mapDispatchToProps : dispatch를 어떻게 props와 연결할 건지 정의 (action 생성부터 dispatch까지 한번에 다 실행하려는 의도)
// -> 여기의 액션 값에 따라 리듀서가 작동함
export default connect(
    mapStateTopProps, 
    mapDispatchToProps
)(NewCakeContainer)
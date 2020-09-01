import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props){
    return(
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams} </h2>
            <button onClick = {props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

//현재 상태값을 prop으로 전달
const mapStateTopProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

//현재 상태값을 prop으로 전달
const mapDispatchToProps = dispatch => {
    return{
        buyIceCream: () => dispatch(buyIceCream())
    }
}

//CakeContainer와 redux를 연결시킴
//mapStateToProps : store내 state를 어떻게 props와 연결할 건지 정의 (필요한 것만 선별하여 props에 남길 수 있도록)
//mapDispatchToProps : dispatch를 어떻게 props와 연결할 건지 정의 (action 생성부터 dispatch까지 한번에 다 실행하려는 의도)
// -> 여기의 액션 값에 따라 리듀서가 작동함
export default connect(
    mapStateTopProps, 
    mapDispatchToProps
)(IceCreamContainer)
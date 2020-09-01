import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
import { buyIceCream } from '../redux'

function ItemContainer(props){
    return(
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

// <ItemContainer cake> 하면 ownProps에 cake이 전달되는 상황!!
// 특정 선택한 아이템을 보여주고 싶을때 ownProps에 전달해서 처리
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes 
        : state.iceCream.numOfIceCreams

    return{
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())
    return{
        buyItem: dispatchFunction
    }
}

//만약 mapStateToProps가 없고 mapDispatchToProps만 있다면, 첫번째 arg를 null로 잡을 것
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ItemContainer)
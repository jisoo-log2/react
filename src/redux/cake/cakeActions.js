import { BUY_CAKE } from './cakeTypes'

//payload는 액션에 딸려 넣는? 정보라고 생각하면 될듯
export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}
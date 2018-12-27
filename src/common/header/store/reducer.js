/**
 * @Created by Jason
 * @Date: 2018/12/26 9:58
 */
import * as activeType from './activeType'

const defaultState = {
  focused: false
}

export default (state=defaultState, active)=>{
  if(active.type === activeType.SEARCH_FOCUS){
    return {
      focused: true
    }
  }
  if( active.type === activeType.SEARCH_BLUR ){
    return {
      focused: false
    }
  }
  return state
}


// 先创建active ==> 通过dispatch发送给store ==> store发送给reducer处理 ==> 处理好了reducer 再返回给store ==> store更新视图

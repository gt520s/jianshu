/**
 * @Created by Jason
 * @Date: 2018/12/27 10:16
 */
import * as activeType from './activeType'

export const search_focus = ()=>({
  type: activeType.SEARCH_FOCUS
})


export const search_blur = ()=>({
  type: activeType.SEARCH_BLUR
})

/**
 * @Created by Jason
 * @Date: 2018/12/24 11:36
 */
import React from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import * as actionCreators from './store/activeCreators'
import {
  HeaderWarpper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWarpper
} from './style'

const Header = (props)=>{
 return ( <HeaderWarpper>
   <Logo/>
   <Nav>
     <NavItem className='left active'>首页</NavItem>
     <NavItem className='left'>下载APP</NavItem>
     <NavItem className='right'>登录</NavItem>
     <NavItem className='right'>
       <i className='iconfont'>&#xe636;</i>
     </NavItem>
     <SearchWarpper>
       <CSSTransition
         timeout={200}
         in={props.focused}
         classNames="slide"
       >
         <NavSearch
           className={props.focused ? 'focused' : ''}
           onFocus={props.handleInputFoucs}
           onBlur={props.handleInputBlur}
         >
         </NavSearch>
       </CSSTransition>

       <i
         className={props.focused ? 'focused iconfont' : 'iconfont'}
       >&#xe617;</i>

     </SearchWarpper>

     <Addition>
       <Button className='reg'>注册</Button>
       <Button className='write'>
         <i className='iconfont'>&#xe615;</i>
         写文章
       </Button>
     </Addition>
   </Nav>
 </HeaderWarpper>)
}


const mapStateToProps = (state) => {
  return {
    focused: state.herader.focused
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFoucs(){
      const active = actionCreators.search_focus()
      dispatch(active)
    },
    handleInputBlur () {
      const active = actionCreators.search_blur()
      dispatch(active)
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)

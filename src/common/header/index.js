/**
 * @Created by Jason
 * @Date: 2018/12/24 11:36
 */
import React, {Component} from 'react'
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
class Header extends Component{
  render () {
    return (
      <HeaderWarpper>
        <Logo/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SearchWarpper>
            <NavSearch></NavSearch>
            <i className='iconfont'>&#xe617;</i>
          </SearchWarpper>

          <Addition>
              <Button className='reg'>注册</Button>
              <Button className='write'>
                <i className='iconfont'>&#xe615;</i>
                写文章
              </Button>
          </Addition>
        </Nav>
      </HeaderWarpper>
    )
  }
}

export default Header

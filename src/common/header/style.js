/**
 * @Created by Jason
 * @Date: 2018/12/24 11:45
 */

import styled from 'styled-components'
import logoImg from '../../statics/nav-logo.png'

export const HeaderWarpper = styled.div`
  height: 58px;
  background:#fff;
  border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({href:'/'})`
  width: 100px;
  height: 58px;
  position:absolute;
  top: 0;
  left: 0;
  display:block;
  background:url(${logoImg});
  background-size:contain;
`
export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`
export const NavItem = styled.div`
  line-height:58px;
  padding:0 15px;
  cursor:pointer;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const NavSearch = styled.input.attrs({placeholder:'搜索'})`
  width: 160px;
  box-sizing:border-box;
  height: 30px;
  margin-top:15px;
  margin-left:20px;
  padding:0 30px 0 20px;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#777;
  &::placeholder{
    color:#999;
  }
`

export const Addition = styled.div`
  position:absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  &.reg{
    color:#ec6149;
  }
  &.write{
    background:#ec6149;
    color:#fff;
  }
`

export const SearchWarpper = styled.div`
  position:relative;
  float: left;
   .iconfont{
      position:absolute;
      bottom: 0px;
      right:5px;
      width: 30px;
      line-height: 30px;
      text-align:center;
      border-radius:15px;
   }
`

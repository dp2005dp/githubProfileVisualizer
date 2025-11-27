import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdMenu , IoIosCloseCircle} from 'react-icons/io'

export const NavContainer = styled.div`
  background-color: #0f172a;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`
export const NavHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
`
export const NavFetures = styled.p`
  color: ${props => (props.$isactivetab ? '#3b82f6' : '#ffffff')};
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: ${props => (props.$isactivetab ? 'bold' : '')};

  &:hover {
    color: #3b82f6;
    font-weight: bold;
  }
`
export const NavUl = styled.ul`
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavLi = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const MobileMenu = styled(IoMdMenu)`
  color: #ffffff;
  font-size: 30px;
`
export const CloseIcon = styled(IoIosCloseCircle)`
  margin-top: 40px;
  margin-left: 22px;
  color: #ffffff;
  font-size: 45px;
`
export const MenuPopup = styled.div`
  height: 100vh;
  width: 100vh;
  background-color: #0f172a;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileFeturesContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
`

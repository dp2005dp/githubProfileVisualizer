import Popup from 'reactjs-popup'


import {
  NavContainer,
  NavHeading,
  NavFetures,
  NavUl,
  NavLi,
  NavLink,
  MobileMenu,
  MenuPopup,
  MenuButton,
  MobileFeturesContainer,
  CloseIcon
} from './styledComponents'

const Header = props => {
  const {tab} = props

  return (
    <NavContainer>
      <NavHeading>Github Profile Visualizer</NavHeading>
      <NavUl>
        <NavLi>
          <NavLink to="/">
            <NavFetures $isactivetab={tab === 'Home'}>Home</NavFetures>
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink to="/repositories">
            <NavFetures $isactivetab={tab === 'Respositories'}>
              Respositories
            </NavFetures>
          </NavLink>
        </NavLi>

        <NavLi>
          <NavLink to="/analysis">
            <NavFetures $isactivetab={tab === 'Analysis'}>Analysis </NavFetures>
          </NavLink>
        </NavLi>
      </NavUl>

      <Popup
        modal
        trigger={
          <MenuButton type="button">
            <MobileMenu />
          </MenuButton>
        }
      >
        {(close) => (
          <MenuPopup>       
            <CloseIcon onClick={() => close()}/> 
            <MobileFeturesContainer>
              <NavLink to="/">
                <NavFetures $isactivetab={tab === 'Home'}>Home</NavFetures>
              </NavLink>

              <NavLink to="/repositories">
                <NavFetures $isactivetab={tab === 'Respositories'}>
                  Respositories
                </NavFetures>
              </NavLink>

              <NavLink to="/analysis">
                <NavFetures $isactivetab={tab === 'Analysis'}>
                  Analysis
                </NavFetures>
              </NavLink>
            </MobileFeturesContainer>
          </MenuPopup>
        )}
      </Popup>
    </NavContainer>
  )
}

export default Header

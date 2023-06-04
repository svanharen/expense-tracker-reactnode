import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/user.png'
import { menuItems } from '../../utils/menuItems'
import { signout } from '../../utils/icons'

function Navigation() {
  return (
    <NavStyled>
        <div className="avatar">
            <img src={avatar} alt="avatar" />
            <div className='text'>
                <h2>Joe</h2>
                <p>Your money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {menuItems.map((item) => {
                return <li key={item.id}>
                            {item.icon}
                            <span>{item.title}</span>
                        </li>
            })}
        </ul>
        <div className='bottom-nav'>
            <li>
               {signout} Sign Out
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`

`;

export default Navigation
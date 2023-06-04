import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useWindow } from '../../utils/useWindow';

function Orb() {

    const { width, height } = useWindow();
    //console.log(width, height)

    const moveOrb = keyframes`
    0%{
        transform: translate(0,0);   
    }
    50%{
        transform: translate(${width/1.2}px,${height/1.5}px);
    }
    100%{
        transform: translate(0,0);
    }
    `

    const OrbStyled = styled.div`
        width: 70vh;
        height: 70vh;
        position: absolute;
        border-radius: 50%;
        margin-top: -37vh;
        margin-left: -37vh;
        background: linear-gradient(180deg, #3daeeb 0%, #edf2f5 100%);
        filter: blur(400px);
        animation: ${moveOrb} 15s alternate linear infinite;
        opacity: 0.5;
        
    `;
  return (
    <OrbStyled></OrbStyled>

  )
}

export default Orb
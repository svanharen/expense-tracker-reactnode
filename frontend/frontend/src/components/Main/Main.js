import React from 'react'
import styled from 'styled-components'

function Main({content}) {
  return (
    <MainStyled>{content}</MainStyled>
  )
}

const MainStyled = styled.div`
        flex: 1;
      background: rgba(252, 246, 249, 0.8);
      border: 3px solid #FFFFFF;
      backdrop-filter: blur(4.5px);
      border-radius: 32px;
      overflow: auto;
      overflow-x: hidden;
      &::-webkit-scrollbar{
        width: 0;
      }
`;

export default Main
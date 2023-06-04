
import bg from './images/cloud-bg-min.png';
import styled from 'styled-components';
import { MainLayout } from './styles/layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <AppStyled bgImg={bg} className="App">
      <Orb />
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
    height: 100vh;
    background-image: url(${props => props.bgImg});
    //background-color: #3daeeb;
    background-size: cover;
    position: relative;

`;

export default App;

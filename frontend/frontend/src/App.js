
import bg from './images/cloud-bg-min.png';
import styled from 'styled-components';
import { MainLayout } from './styles/layouts';
import Orb from './components/Orb/Orb';
import Navigation from './components/Navigation/Navigation';
import { useState, useMemo } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import Incomes from './components/Incomes/Incomes';
import Expenses from './components/Expenses/Expenses';
import Main from './components/Main/Main';
import { useGlobalContext } from './context/globalContext';

function App() {

  const [selectActive, setSelectActive] = useState(1)

  const global = useGlobalContext(); 
  //console.log(global)

  // Use useMemo to memoize the Orb component so that it doesn't re-render when the selectActive state changes
  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () =>{
    switch(selectActive){
      case 1:
        return <Dashboard />
      case 2:
        return <Transactions />
      case 3:
        return <Incomes />
      case 4:
        return <Expenses />
      default:
        return <Dashboard />
    }
  }

  return (
    <AppStyled bgImg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation selectActive={selectActive} setSelectActive={setSelectActive} />
        <Main content={displayData()} />
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

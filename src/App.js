import './App.css';
import styled from 'styled-components'
import { Result } from './components/Result/Result';
import { Search } from './components/Search/Search';
import { Title } from './components/Title/Title';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false)
  const [name, setName] = useState("datodia")
  const [data, setData] = useState({})

  return (
    <Main dark={dark}>
      <Title setDark={setDark} dark={dark} />
      <Container>
        <Search dark={dark} name={name} setName={setName} setData={setData} />
        <Result data={data} dark={dark} />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.dark ? "var(--black)" : "var(--body)"};
  transition: all .5s;
`

const Container = styled.div`
  width: 327px;
  height: 600px;

  @media screen and (min-width: 600px) {
    width: 573px;
    height: 591px;
  }
  @media screen and (min-width: 900px) {
    width: 730px;
  }
`

export default App;

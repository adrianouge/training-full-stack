import {
  Header, Logo, Navbar,
  FilmsSection, MainTitle
} from "./components/styled-components";

function App() {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <Navbar>
        <a>Home</a>
        <a>About</a>
      </Navbar>
      <FilmsSection>
        <MainTitle>Films</MainTitle>
        
      </FilmsSection>
    </>
  );
}

export default App;

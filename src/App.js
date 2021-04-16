import styled from 'styled-components'

function App() {
  return (
    <Container className="App">
    <Navigation>Navigation</Navigation>
    <Header>Header</Header>
    </Container>
  );
}

export default App;

const Container = styled.div`

height: 100vh;

display: grid;

grid-template:
"nav head" min-content
"nav main" 1fr
    / min-content 1fr;
`;

const Navigation = styled.div`
grid-area: nav;

overflow: auto;
    resize: horizontal;
    
    min-width: 120px;
    max-width: 50vw;
`;

const Header = styled.div`
grid-area: head;
overflow: auto;
    resize: vertical;
    
    min-height: min-content;
    max-height: 200px;
`;
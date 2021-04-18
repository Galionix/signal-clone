import styled from 'styled-components'
import Navigation from './components/Navigation';

const colors = [
  '#023059',
  '#012840',
  '#011826',
  '#3C88A6',
  '#C4E5F2']
const named_colors = {
  alert: 'red',
  highlight: 'rgba(255, 255, 255, 0.3)'
}


function App() {
  return (
    <Container className="App">
    <Panel>

    <PanelButton className='far fa-window-minimize' hover={named_colors.highlight}/>
    <PanelButton className='far fa-stop' hover={named_colors.highlight}/>
    <PanelButton className='far fa-times' hover={named_colors.alert}/>

    </Panel>
    <Navigation colors={colors}/>
    <ChatList>ChatList</ChatList>
    <ChatContainer>
    <ChatPanel>
    Chat Panel
    </ChatPanel>
    <ChatMessages>
    Chat Messages
    </ChatMessages>
    <ChatSendingSection>
    Chat Sending Section
    </ChatSendingSection>
    </ChatContainer>
    </Container>
  );
}

export default App;

const PanelButton = styled.i`

font-size: .8em;
color: whitesmoke;
padding: .5em;
:hover{
    background-color: ${({hover})=>  hover };
color: white ;

}
/* cursor: pointer; */
`;

const ChatList = styled.div`
background-color: ${colors[0]};
grid-area: chatlist;
`;
const ChatContainer = styled.div`
display: grid;
grid-template-rows: 3.4em auto 3em;

`;
const ChatPanel = styled.div`

background-color: ${colors[0]};
color: whitesmoke;
`;
const ChatMessages = styled.div`
background-color: ${colors[1]};
color: whitesmoke;

`;
const ChatSendingSection = styled.div`
background-color: ${colors[0]};
color: whitesmoke;

`;
const Container = styled.div`

height: 100vh;

display: grid;
grid-template:
"panel panel"
"nav chat";
grid-template-rows: 1.4em auto;
grid-template-columns: 4.5em auto;
${ChatList}{
  display: none;
}
@media screen and (min-width: 715px){

  ${ChatList}{
  display: block;
}

grid-template:
"panel panel panel"
"nav chatlist chat";

grid-template-rows: 1.4em auto;
grid-template-columns: 4.5em 16.2em auto;

}

`;

const Panel = styled.div`
grid-area: panel;
background-color: ${colors[3]};
color: whitesmoke;
display: flex;
justify-content: flex-end;
align-items: center;
`;
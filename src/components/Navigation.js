import { useState } from "react";
import styled from "styled-components";

function Navigation({ colors }) {
  const navItems = [
    {
      id: 1,
      hover: colors[2],
      back: colors[1],
      iconName: "comments",
      label: "Все чаты",
      active: false,
    },
    {
      id: 2,
      hover: colors[2],
      back: colors[1],
      iconName: "folder",
      label: "папка с чатами",
      active: false,
      unreadCount: 0,
    },
  ];
  const [items, setItems] = useState(navItems);

  const itemChange = id =>{
      
    setItems((items) => {
        items= items.map(item => {
              if (item.active === true)  item.active = false; 
              return item;
            });
        
        return items.map(item => {
          if (item.id === id) {
            item.active = true;
          }
          return item;
        });
      });
  }
  return (
    <Container color={colors[1]}>
      <NavButton
        className="fal fa-bars"
        hover={colors[2]}
        back={colors[1]}
      ></NavButton>
      {items.map(
        ({ id, hover, back, iconName, label, active, unreadCount }) => (
          <NavItem
            key={id}
            iconName={iconName}
            hover={hover}
            back={back}
            onClick={()=>{itemChange(id)}}
          >
            <i
              className={active ? "fa fa-" + iconName : "fal fa-" + iconName}
            ></i>

            {label && <span className="label">{label}</span>}
            {(unreadCount !== undefined && unreadCount != 0 ) && <span className="badge">{unreadCount}</span>}
          </NavItem>
        )
      )}
      {/* <NavItem iconName='comments' hover={colors[2]} back={colors[1]} active onClick={()=>{}}>
{
    active ? "<i className='fa fa-'"+iconName+"></i>" : "<i className='fa fa-'"+iconName+"></i>"
}
            
            <span className='label'>
            Все чаты
            </span>
            <span className='badge'>1</span>
            </NavItem> */}
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  grid-area: nav;
  background-color: ${({ color }) => color};
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NavItem = styled.div`
  /* padding: .5em; */
  height: 4em;
  background-color: ${({ active, hover, back }) => (active ? hover : back)};
  cursor: pointer;

  span.label {
    text-align: center;
    /* height: 1em; */
    /* overflow: hidden; */
    font-size: 0.7em;
  }
  span.badge {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1em;
    border: 1px solid ${({ active, hover, back }) => (active ? hover : back)};
    background-color: white;
    height: 1em;
    color: ${({ back }) => back};
    border-radius: 0.7em;
    padding: 0.1em;
    position: absolute;
    top: 0.7em;
    right: 1.5em;
    font-size: 0.7em;
  }
  i::before {
    font-size: 2em;
  }
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* place-items: center; */
  :hover {
    background-color: ${({ hover }) => hover};
  }
  /* :after{
    font-family: Segoe UI;
    content:"1";
    position: absolute;
    background-color: ${({ active, hover, back }) => (active ? "white" : back)};
    height:1.5rem;
    top:.5rem;
    right:.5rem;
    width:1.5rem;
    text-align: center;
    line-height: 1.5rem;
    font-size: 1rem;
    border-radius: 50%;
    color: ${({ active, hover, back }) => (active ? back : "white")};
    border:1px solid ${({ active, hover, back }) => (active ? back : "white")};
} */
`;

const NavButton = styled(NavItem)`
  height: 3em;
  font-size: 1.2em;
`;

const TestItem = styled.img``;

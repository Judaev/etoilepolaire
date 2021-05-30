import styled from "styled-components";

export const SNavbarContainer = styled.div`
  margin-top: 25px;

  width: 250px; 

  background-color: #fff; 

  border-radius: 10px;

  -webkit-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
`

export const SNavbarItem = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0 5px 15px;

  :active {
  background-color: rgb(238, 238, 238);
  }

  :hover {
    border-left: 5px solid blue;
    background-color: rgb(238, 238, 238);
  }
`
import styled from "styled-components";

export const SSidebarContainer = styled.div`
  position: fixed;
  left: 0;

  margin-bottom: 30px;
  padding: 20px 20px;
  
  width: 250px;
  height: 100vh;

  overflow: auto;

  ::-webkit-scrollbar {
  width: 0;
  }

  @media (max-width: 450px) {
    .sidebar {
      width: 0;
    }
  }
`


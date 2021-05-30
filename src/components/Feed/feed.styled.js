import styled from "styled-components";

export const SFeedContainer = styled.div`
  position: fixed;
  right: 0;

  padding: 20px 20px;

  width: 300px;
  height: 100vh;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 450px) {
    .feed {
      width: 0;
    }
  }
`
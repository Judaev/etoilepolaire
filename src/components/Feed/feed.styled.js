import styled from "styled-components";

export const SFeedContainer = styled.div`
  position: fixed;
  right: 0;

  width: 300px;
  height: 100%;

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
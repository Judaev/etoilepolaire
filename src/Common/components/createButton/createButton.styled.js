import styled from "styled-components";
import { MAIN_COLOR } from "../../assets/styled-variables";

export const SCreateButtonContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 0 10px;
  padding: 8px 15px;

  width: 100px;
  background-color: ${MAIN_COLOR};

  border-radius: 12px;

  cursor: pointer;
`

export const SCreateButtonPlusIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  width: 20px;
  height: 20px;

  border: 2px solid #fff;
  border-radius: 5px;
`

export const SCreateButtonTitle = styled.span`
  display: flex;
  align-items: center;

  height: 20px;

  font-size: 18px;
  color: #fff;
`
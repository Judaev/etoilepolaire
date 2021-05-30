import styled from "styled-components";
import { MAIN_COLOR } from "../../assets/styled-variables";

export const SCardContainer = styled.div`
  margin-top: 20px;
  padding: 20px 15px 15px 15px;

  height: 255px;

  background-color: #fff;

  border-radius: 15px;

  -webkit-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 2px 5px 2px rgba(34, 60, 80, 0.2);
`

export const SCardBackground = styled.div`
  background-image: url('https://bsmedia.business-standard.com/_media/bs/img/article/2019-12/11/full/1576068957-3614.jpg');

  width: 220px;
  height: 200px;

  border-radius: 15px;
`

export const SCardTitle = styled.div`
  padding-top: 140px;
  padding-left: 15px;

  width: 200px;

  font-size: 18px;
  color: #fff;
`

export const SCardButton = styled.button`
  margin-right: 40px;
  padding: 10px 20px;

  width: 130px;

  font-size: 18px;
  color: #fff;
  font-weight: 700;

  border: 0;
  border-radius: 10px;

  background-color: ${MAIN_COLOR};
  cursor: pointer;
`

export const SCardCloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 12px;

  border: 2px solid rgba(0, 0, 0, 0.336);
  border-radius: 5px;

  cursor: pointer;
`
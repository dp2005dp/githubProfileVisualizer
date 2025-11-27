import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const IntialContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f172a;

  @media screen and (max-width: 767px) {
    height: 100vh;
  }
`
export const ErrorImage = styled.img`
  height: 400px;
  width: 450px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    height: 300px;
    width: 350px;
  }
`
export const DataNotFound = styled.img`
  height: 350px;
  width: 350px;
  margin-top: 0px;
  margin-bottom: 5px;

  @media screen and (max-width: 767px) {
    width: 250px;
    width: 250px;
  }
`
export const ErrorMsg = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const ErrorMessage = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 15px;
    text-align: center;
  }
`
export const GoToHome = styled.button`
  height: 40px;
  width: 100px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #3b82f6;
  border-radius: 5px;
  border-width: 0px;
  cursor: pointer;
  margin-top: 20px;
`
export const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

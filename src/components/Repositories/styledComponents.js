import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const RepositoriesConatainer = styled.div`
  background-color: #0f172a;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const RepositoriesResponsiveConatainer = styled.div`
  width: 75vw;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0px;
  }
`

export const Repo = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const RepoUl = styled.ul`
  padding: 0px;
  margin: 0px;

   @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const RepoLI = styled.li`
  list-style-type: none;
  background-color: #1d2537;
  border-radius: 10px;
  border-width: 0px;
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 30px;
`
export const RepoName = styled.h1`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 30px;
  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const RepoDescripition = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
`
export const RepoLaungageUl = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const RepoStarForks = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 15px;
`
export const RepoFlexConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`
export const IntialContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ErrorImage = styled.img`
  height: 500px;
  width: 500px;
  margin-top: 0px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    height: 450px;
    width: 450px;
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
export const ErrorMsg = styled.p`
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
  color: #414038;
  font-family: 'Roboto';
  font-size: 15px;
  background-color: #ffffff;
  border-radius: 5px;
  border-width: 0px;
  cursor: pointer;
  margin-top: 20px;
`
export const RepoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

import styled from 'styled-components'

export const RepositoriesItemConatainer = styled.div`
  background-color: #0f172a;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`
export const Repo = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`
export const RepoUl = styled.ul`
  padding: 0px;
  margin: 0px;
`
export const RepoLI = styled.li`
  width: 60vw;
  list-style-type: none;
  background-color: #1d2537;
  border-radius: 10px;
  border-width: 0px;
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    width: 95%;
    padding: 10px;
  }
`
export const RepoName = styled.h1`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 30px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const RepoDescripition = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
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
  margin-left: 10px;
`
export const RepoFlexConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
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
export const CommitsIssueContainer = styled.div`
  height: 100px;
  width: 200px;
  border-radius: 5px;
  border: 2px solid #cbd5e1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`
export const CommitsIssueHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const CommitsIssue = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const CommitsIssueFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const PieHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const PieChartContainer = styled.div`
  width: 500px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContributorsContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const Contributors = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`

export const ContributorsCount = styled.p`
  color: #cbd5e1;
  font-family: 'Roboto';
  font-size: 20px;
  margin-bottom: 20px;
`
export const ContributorsMembers = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  border-width: 0px;
  margin-right: 15px;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    height: 50px;
    width: 50px;
  }
`

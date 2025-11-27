import styled from 'styled-components'

export const AnalysisConatainer = styled.div`
  background-color: #0f172a;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
export const AnalysisResponsiveConatainer = styled.div`
  width: 80vw;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const AnalysisHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const PieHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const PieChartContainer = styled.div`
  margin-top: 0px;
  width: 500px;
  @media screen and (max-width: 1200px) {
    width: 380px;
  }
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
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 15px;
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
export const ChartsFlexConatiner = styled.div`
  width: 75vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`
export const CommitsChartsConatiner = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

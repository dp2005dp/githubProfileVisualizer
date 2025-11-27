import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 100%;
  background-color: #0f172a;

  @media screen and (max-width: 767px) {
    height: 100vh;
  }
`
export const HomeResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SerachFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InputContainer = styled.input`
  height: 45px;
  width: 350px;
  background-color: #475569;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  padding: 15px;
  border-width: ${props => (props.$isErrorBorder ? '2px' : '0px')};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
  border: 1px solid ${props => (props.$isErrorBorder ? 'red' : 'transparent')};

  @media screen and (max-width: 767px) {
    margin-top: 50px;
    width: 280px;
  }
`
export const ButtonContainer = styled.div`
  background-color: #606060;
  height: 45px;
  width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-top: 50px;
  }
`
export const ErrorMeaage = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`

export const HomeProfilevisualizer = styled.img`
  height: 500px;
  width: 500px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 767px) {
    height: 400px;
    width: 350px;
  }
`
export const HomeHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
  margin-top: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`
export const Avatar = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  border-width: 0px;

  @media screen and (max-width: 767px) {
    height: 150px;
    width: 150px;
    margin-top: 30px;
  }
`

export const Name = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const Login = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  margin-top: 1px;
  margin-bottom: 0px;

  @media screen and (max-width: 767px) {
    font-size: 22px;
  }
`
export const Bio = styled.p`
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const BioContainer = styled.div`
  width: 550px;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 40px;
  }
`

export const Numbers = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`
export const DetailsHeading = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
`
export const Details = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  margin-left: 15px;

  
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`
export const BlogLink = styled.a`
  text-decoration: none;

  &:hover {
    color: skyblue;
  }
`

export const ErrorImage = styled.img`
  height: 180px;
  width: 380px;
  margin-top: 65px;
  @media screen and (max-width: 767px) {
    heught: 150px;
    width: 350px;
  }
`
export const ErrorMsg = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }
`
export const TryAgain = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  height: 40px;
  width: 100px;
  background-color: #3b82f6;
  border-radius: 5px;
  border-width: 0px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
`
export const MarginContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  text-align: center;
 
  @media screen and (max-width: 767px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`
export const VerticalLine = styled.div`
  border-left: 1px solid #3b82f6;
  height: 80px;
`
export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 10px;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`
export const IntialContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MobileCompanyUrlContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: block;
  }
`
export const LaptopCompanyUrlContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const CompanyDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 550px;
`

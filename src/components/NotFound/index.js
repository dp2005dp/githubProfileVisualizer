import {
  IntialContainer,
  ErrorImage,
  ErrorMsg,
  ErrorMessage,
  GoToHome,
  HomeLink,
} from './styledComponents'

const NotFound = () => (
  <IntialContainer>
    <ErrorImage
      src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763960331/Group_7519_oluhaa.png"
      alt="page not found"
    />
    <ErrorMsg>PAGE NOT FOUND</ErrorMsg>
    <ErrorMessage>
      we are sorry, the page you requested could not be found Please go back to
      the homepage.
    </ErrorMessage>
    <HomeLink to="/">
      <GoToHome>Go to Home</GoToHome>
    </HomeLink>
  </IntialContainer>
)

export default NotFound

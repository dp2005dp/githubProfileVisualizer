import {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import{TailSpin} from 'react-loader-spinner'
import {HiOutlineSearch} from 'react-icons/hi'
import {RiBuildingLine} from 'react-icons/ri'
import {IoLocationOutline} from 'react-icons/io5'
import {IoMdLink} from 'react-icons/io'
import Header from '../Header'
import AppContext from '../../context/AppContext'

import {
  HomeContainer,
  HomeResponsiveContainer,
  SerachFlexContainer,
  InputContainer,
  ButtonContainer,
  ErrorMeaage,
  HomeProfilevisualizer,
  HomeHeading,
  FlexContainer,
  Avatar,
  Name,
  Login,
  Bio,
  Numbers,
  DetailsHeading,
  Details,
  ErrorImage,
  ErrorMsg,
  TryAgain,
  MarginContainer,
  VerticalLine,
  UserDetailsContainer,
  BioContainer,
  BlogLink,
  IntialContainer,
  LoaderContainer,
  MobileCompanyUrlContainer,
  LaptopCompanyUrlContainer,
} from './styledComponents'

const renderState = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

const Home = () => {
  const {contextUsername} = useContext(AppContext)
  const navigate = useNavigate()
  const [userValue, setUsername] = useState('')

  const [apiResponse, setapiResponse] = useState({
    status: renderState.intial,
    data: null,
    errorMsg: null,
    isErrorMsg: false,
  })

  useEffect(() => {
    const profileVisualizeApi = async () => {
      if (contextUsername === '') return
      setapiResponse(preStatus => ({...preStatus, status: renderState.loader}))
      const options = {
        method: 'GET',
      }

     
      const token = Cookies.get('pat_token')
      
       const url = `https://apis2.ccbp.in/gpv/profile-details/${contextUsername}?api_key=${token}`

      const response = await fetch(url, options)
      const responseData = await response.json()

      if (!response.ok) {
        setapiResponse(preStatus => ({
          ...preStatus,
          errorMsg: responseData.error_msg,
          status: renderState.failure,
          isErrorMsg: true,
        }))
        return
      }

      const destructureData = {
        avatarUrl: responseData.avatar_url,
        bio: responseData.bio,
        blog: responseData.blog,
        company: responseData.company,
        createdAt: responseData.created_at,
        email: responseData.email,
        eventsUrl: responseData.events_url,
        followers: responseData.followers,
        followersUrl: responseData.followers_url,
        following: responseData.following,
        followingUrl: responseData.following_url,
        gistsUrl: responseData.gists_url,
        gravatarId: responseData.gravatar_id,
        hireable: responseData.hireable,
        htmlUrl: responseData.html_url,
        id: responseData.id,
        location: responseData.location,
        login: responseData.login,
        name: responseData.name,
        nodeId: responseData.node_id,
        organizationsUrl: responseData.organizations_url,
        publicGists: responseData.public_gists,
        publicRepos: responseData.public_repos,
        receivedEventsUrl: responseData.received_events_url,
        reposUrl: responseData.repos_url,
        siteAdmin: responseData.site_admin,
        starredUrl: responseData.starred_url,
        subscriptionsUrl: responseData.subscriptions_url,
        twitterUsername: responseData.twitter_username,
        type: responseData.type,
        updatedAt: responseData.updated_at,
        url: responseData.url,
      }

      setapiResponse(preStatus => ({
        ...preStatus,
        data: destructureData,
        status: renderState.success,
        isErrorMsg: false,
      }))
    }
    profileVisualizeApi()
  }, [contextUsername])

  const userInput = e => {
    setUsername(e.target.value)
  }

  return (
    <AppContext.Consumer>
      {value => {
        const {enterUsername} = value

        const onSearch = () => {
          enterUsername(userValue.trim())
          setUsername('')
        }
         
        const onLogout = () => {
          Cookies.remove('pat_token')
          navigate('/login')
        }

        const loaderView = () => (
          <LoaderContainer data-testid="loader">
            <TailSpin  color="#3B82F6" height={50} width={50} />
          </LoaderContainer>
        )

        const failureView = () => (
          <IntialContainer>
            <ErrorImage src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763890676/Group_7522_iwtelt.png" />
            <ErrorMsg>Something went wrong. Please try again</ErrorMsg>
            <SerachFlexContainer>
            <TryAgain type="button"
              onClick={() => {
                setapiResponse({
                  status: renderState.intial,
                  data: null,
                  errorMsg: null,
                })
              }}
            >
              Try again
            </TryAgain>

             <TryAgain
              onClick={onLogout}
              type="button"
            >
              Logout
            </TryAgain>
            </SerachFlexContainer>
          </IntialContainer>
        )

        const intialView = () => (
          <HomeProfilevisualizer
            src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763890297/Data_report-pana_h9ilgg.png"
            alt="github profile visualizer home page"
          />
        )

        const successView = () => {
          const {data} = apiResponse

          return (
            <UserDetailsContainer>
              <Avatar src={data.avatarUrl} alt={data.name} />

              <Name>{data.name}</Name>
              <Login>{data.login}</Login>
              <BioContainer>
                <Bio>{data.bio}</Bio>
              </BioContainer>

              <FlexContainer>
                <MarginContainer>
                  <Numbers>{data.followers}</Numbers>
                  <Details>FOLLOWERS</Details>
                </MarginContainer>
                <VerticalLine />

                <MarginContainer>
                  <Numbers>{data.following}</Numbers>
                  <Details>FOLLOWING</Details>
                </MarginContainer>
                <VerticalLine />

                <MarginContainer>
                  <Numbers>{data.publicRepos}</Numbers>
                  <Details>PUBLIC REPOS</Details>
                </MarginContainer>
              </FlexContainer>

              <FlexContainer>
                <MarginContainer>
                  <DetailsHeading>Company</DetailsHeading>
                  <FlexContainer>
                    <RiBuildingLine size={20} color="#ffffff" />
                    {data.company === null ? (
                      <Details>Null</Details>
                    ) : (
                      <Details>{data.company}</Details>
                    )}
                  </FlexContainer>
                </MarginContainer>

                <LaptopCompanyUrlContainer>
                  <MarginContainer>
                    <DetailsHeading>Company Url</DetailsHeading>
                    <FlexContainer>
                      <IoMdLink size={20} color="#ffffff" />

                      {data.blog.length >= 0 ? (
                        <Details>Null</Details>
                      ) : (
                        <BlogLink
                          href={data.blog}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Details>{data.blog}</Details>
                        </BlogLink>
                      )}
                    </FlexContainer>
                  </MarginContainer>
                </LaptopCompanyUrlContainer>

                <MarginContainer>
                  <DetailsHeading>Location</DetailsHeading>
                  <FlexContainer>
                    <IoLocationOutline size={20} color="#ffffff" />
                    {data.location === null ? (
                      <Details>Null</Details>
                    ) : (
                      <Details>{data.location}</Details>
                    )}
                  </FlexContainer>
                </MarginContainer>
              </FlexContainer>

              <MobileCompanyUrlContainer>
                <MarginContainer>
                  <DetailsHeading>Company Url</DetailsHeading>
                  <FlexContainer>
                    <IoMdLink size={20} color="#ffffff" />

                    {data.blog.length >= 0 ? (
                      <Details>Null</Details>
                    ) : (
                      <BlogLink
                        href={data.blog}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Details>{data.blog}</Details>
                      </BlogLink>
                    )}
                  </FlexContainer>
                </MarginContainer>
              </MobileCompanyUrlContainer>
            </UserDetailsContainer>
          )
        }

        const uiView = () => {
          const {status} = apiResponse

          switch (status) {
            case renderState.success:
              return successView()
            case renderState.failure:
              return failureView()
            case renderState.intial:
              return intialView()
            case renderState.loader:
              return loaderView()
            default:
              return null
          }
        }

        return (
          <>
            <Header tab="Home" />
            <HomeContainer>
              <HomeResponsiveContainer>
                <SerachFlexContainer>
                  <InputContainer
                    type="search"
                    placeholder="Enter githup username"
                    onChange={userInput}
                    value={userValue}
                    $isErrorBorder={apiResponse.isErrorMsg}
                  />
                  <ButtonContainer
                    data-testid="searchButton"
                    onClick={onSearch}
                  >
                    <HiOutlineSearch size={20} color="#ffffff" />
                  </ButtonContainer>
                </SerachFlexContainer>
                {apiResponse.isErrorMsg && (
                  <ErrorMeaage>{apiResponse.errorMsg}</ErrorMeaage>
                )}
                <HomeHeading>Github Profile Visualizer</HomeHeading>
                {uiView()}
              </HomeResponsiveContainer>
            </HomeContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )
}

export default Home

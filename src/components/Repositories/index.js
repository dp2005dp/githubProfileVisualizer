import {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import{TailSpin} from 'react-loader-spinner'
import {FaStar} from 'react-icons/fa'
import {BiGitRepoForked} from 'react-icons/bi'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import {
  RepositoriesConatainer,
  RepositoriesResponsiveConatainer,
  Repo,
  RepoUl,
  RepoLI,
  RepoName,
  RepoDescripition,
  RepoLaungageUl,
  RepoStarForks,
  RepoFlexConatiner,
  IntialContainer,
  ErrorImage,
  ErrorMsg,
  ErrorMessage,
  GoToHome,
  DataNotFound,
  RepoLink,
  LoaderContainer,
} from './styledComponents'
import './index.css'

const languagesColors = ['purple', 'green', 'blue', 'pink', 'yellow']
const renderState = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

const Repositories = () => {
  const {contextUsername} = useContext(AppContext)
  const navigate = useNavigate()
  const [stateStatus, setStatus] = useState({
    data: [],
    status: renderState.intial,
  })

  useEffect(() => {
    const respositoriesApi = async () => {
      if (contextUsername === '') {
        setStatus(prevState => ({
          ...prevState,
          status: renderState.intial,
        }))

        return
      }
      setStatus(prevState => ({...prevState, status: renderState.loader}))

      
      const token = Cookies.get('pat_token')
       const url = `https://apis2.ccbp.in/gpv/repos/${contextUsername}?api_key=${token}`
      const options = {
        method: 'GET',
      }

      const response = await fetch(url, options)
      const responseData = await response.json()
       console.log(responseData)
      if (!response.ok) {
        setStatus(prevState => ({...prevState, status: renderState.failure}))
        return
      }
      
      if (responseData.length === 0) {
        setStatus(prevState => ({...prevState, status: renderState.intial}))
        return
      }

      const destructureData = responseData.map(eachItem => ({
        name: eachItem.name,
        description: eachItem.description,
        languages: eachItem.languages,
        stargazersCount: eachItem.stargazers_count,
        forksCount: eachItem.forks_count,
        id: eachItem.id,
        isStar: false,
      }))

      setStatus(prevState => ({
        ...prevState,
        status: renderState.success,
        data: destructureData,
      }))
    }

    respositoriesApi()
  }, [contextUsername])

  const applyStar = id => {
    setStatus(prevData => ({
      ...prevData,
      data: prevData.data.map(item =>
        item.id === id ? {...item, isStar: !item.isStar} : item,
      ),
    }))
  }

  const loaderView = () => (
    <LoaderContainer data-testid="loader">
      <TailSpin  color="#3B82F6" height={50} width={50} />
    </LoaderContainer>
  )

  const intialView = () => (
    <IntialContainer>
      <ErrorImage
        src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763435418/No_data-rafiki_kyhogv.png"
        alt="empty repositories"
      />
      <ErrorMsg>No Repositories Found!</ErrorMsg>
    </IntialContainer>
  )

  const gotoHomePage = () => {
     navigate('/')
  }

  const failureView = () => (
    <IntialContainer>
      <DataNotFound
        src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763713402/Empty_Box_Illustration_1_2_hqcrvq.png"
        alt="no repositories"
      />
      <ErrorMsg>No Data Found</ErrorMsg>
      <ErrorMessage>
        GitHub Username is empty, please provide a valid username for
        Repositories
      </ErrorMessage>
      <GoToHome onClick={gotoHomePage}>Go to Home</GoToHome>
    </IntialContainer>
  )

  const repositoriesSuccessView = () => (
    <>
      <Repo>Repositories</Repo>
      <RepoUl>
        {stateStatus.data.map(eachItem => (
          <RepoLI key={eachItem.id}>
            <RepoLink to={`/repositories/${eachItem.name}`}>
              <RepoName>{eachItem.name}</RepoName>
              <RepoDescripition>{eachItem.description}</RepoDescripition>
              <RepoLaungageUl>
                {eachItem.languages.map(eachLanguage => {
                  const randomColor = Math.ceil(
                    Math.random() * languagesColors.length - 1,
                  )

                  return (
                    <li
                      className={`${languagesColors[randomColor]} languagesContainer`}
                      key={eachLanguage.name}
                    >
                      <p>{eachLanguage.name}</p>
                    </li>
                  )
                })}
              </RepoLaungageUl>

              <RepoFlexConatiner>
                <RepoFlexConatiner>
                  <FaStar
                    size={20}
                    color={eachItem.isStar ? 'yellow' : '#94A3B8'}
                    onClick={() => applyStar(eachItem.id)}
                  />
                  <RepoStarForks>{eachItem.stargazersCount}</RepoStarForks>
                </RepoFlexConatiner>

                <RepoFlexConatiner>
                  <BiGitRepoForked size={20} color="#94A3B8" />
                  <RepoStarForks>{eachItem.forksCount}</RepoStarForks>
                </RepoFlexConatiner>
              </RepoFlexConatiner>
            </RepoLink>
          </RepoLI>
        ))}
      </RepoUl>
    </>
  )

  const uiView = () => {
    const {status} = stateStatus

    switch (status) {
      case renderState.success:
        return repositoriesSuccessView()
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
      <Header tab="Respositories" />
      <RepositoriesConatainer>
        <RepositoriesResponsiveConatainer>
          {uiView()}
        </RepositoriesResponsiveConatainer>
      </RepositoriesConatainer>
    </>
  )
}

export default Repositories

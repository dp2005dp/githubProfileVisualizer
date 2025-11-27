import {useContext, useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import { useParams } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import {BiGitRepoForked} from 'react-icons/bi'
import{TailSpin} from 'react-loader-spinner'
import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import {
  RepositoriesItemConatainer,
  RepoUl,
  RepoLI,
  RepoName,
  RepoDescripition,
  RepoLaungageUl,
  RepoStarForks,
  RepoFlexConatiner,
  CommitsIssueContainer,
  CommitsIssueHeading,
  CommitsIssue,
  CommitsIssueFlexContainer,
  PieHeading,
  PieChartContainer,
  IntialContainer,
  ErrorImage,
  ErrorMsg,
  ErrorMessage,
  GoToHome,
  DataNotFound,
  LoaderContainer,
  ContributorsContainer,
  Contributors,
  ContributorsCount,
  ContributorsMembers,
} from './styledComponents'

import './index.css'

const languagesColors = ['purple', 'green', 'blue', 'pink', 'yellow']
const chatClors = [
  '#00b4d8',
  '#48cae4',
  '#90e0ef',
  '#0077b6',
  '#023e8a',
  '#ff6b6b',
  '#f06595',
  '#cc5de8',
  '#845ef7',
  '#5c7cfa',
  '#4dabf7',
  '#38d9a9',
  '#69db7c',
  '#ff4d6d',
  '#ff758f',
  '#ff8fa3',
  '#c9184a',
  '#720026',
  '#007f5f',
  '#2b9348',
  '#55a630',
  '#80b918',
  '#aacc00',
  '#3a0ca3',
  '#4361ee',
  '#4cc9f0',
  '#4895ef',
  '#560bad',
]
const renderState = {
  intial: 'INTIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loader: 'LOADER',
}

const RepositoryItemDetails = (props) => {
  const {contextUsername} = useContext(AppContext)

  const { repoName } = useParams();

  const [apiResponse, setApi] = useState({
    status: renderState.intial,
    data: [],
    languagesData: [],
    commitsCount: [],
  })

  useEffect(() => {
    const respositotyItemsApi = async () => {
      if (contextUsername === '') {
        setApi(prevState => ({
          ...prevState,
          status: renderState.intial,
        }))

        return
      }
      setApi(prevstate => ({
        ...prevstate,
        status: renderState.loader,
      }))

     
      const token = Cookies.get('pat_token')
       const url = `https://apis2.ccbp.in/gpv/specific-repo/${contextUsername}/${repoName}?api_key=${token}`
      const options = {
        method: 'GET',
      }

      const response = await fetch(url, options)

      const responseData = await response.json()

      if (!response.ok) {
        setApi(prevstate => ({
          ...prevstate,
          status: renderState.failure,
        }))

        return
      }

      const languagesUrl = responseData.languages_url
      const languagesResponse = await fetch(languagesUrl, options)
      const languagesResponseData = await languagesResponse.json()

      const languagesList = Object.entries(languagesResponseData).map(
        ([key, value]) => ({
          name: key,
          count: value,
        }),
      )

      const contributorsUrl = responseData.contributors_url

      const contributorsResponse = await fetch(contributorsUrl, options)
      const contributorsResponseData = await contributorsResponse.json()

      const commitsdata = contributorsResponseData.map(count => ({
        contributions: count.contributions,
        avatarUrl: count.avatar_url,
      }))

      const destructureData = {
        name: responseData.name,
        description: responseData.description,
        stargazersCount: responseData.stargazers_count,
        forksCount: responseData.forks_count,
        id: responseData.id,
        contributors: responseData.contributors,
        openIssuesCount: responseData.open_issues_count,
      }

      setApi(prevstate => ({
        ...prevstate,
        status: renderState.success,
        data: destructureData,
        languagesData: languagesList,
        commitsCount: commitsdata,
      }))
    }

    respositotyItemsApi()
  }, [repoName, contextUsername])

  const languageChartView = () => {
    const {languagesData} = apiResponse
    return (
      <>
        <PieHeading>Languages :</PieHeading>
        <PieChartContainer>
          <ResponsiveContainer height={500}>
            <PieChart>
              <Pie
                cx="40%"
                cy="50%"
                data={languagesData}
                startAngle={0}
                endAngle={360}
                innerRadius="40%"
                outerRadius="70%"
                dataKey="count"
              >
                {languagesData.map(eachLanguage => {
                  let randomIndex = 0

                  const randomColor = Math.ceil(
                    Math.random() * chatClors.length - 1,
                  )

                  if (randomIndex !== randomColor) {
                    randomIndex = randomColor
                  }

                  return (
                    <Cell
                      key={eachLanguage.name}
                      name={eachLanguage.name}
                      fill={chatClors[randomIndex]}
                    />
                  )
                })}
              </Pie>
              <Legend
                iconType="square"
                iconSize={30}
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{
                  fontSize: '14px',
                  lineHeight: '40px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </PieChartContainer>
      </>
    )
  }

  const repositoryItemSuccessView = () => {
    const {data, languagesData, commitsCount} = apiResponse
    const totalCommits = commitsCount.reduce(
      (acc, item) => acc + item.contributions,
      0,
    )
    return (
      <>
        <RepoUl>
          <RepoLI>
            <RepoName>{data.name}</RepoName>
            <RepoDescripition>{data.description}</RepoDescripition>
            <RepoLaungageUl>
              {languagesData.map(eachLanguage => {
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
                <FaStar size={20} color="#94A3B8" />
                <RepoStarForks>{data.stargazersCount}</RepoStarForks>
              </RepoFlexConatiner>

              <RepoFlexConatiner>
                <BiGitRepoForked size={20} color="#94A3B8" />
                <RepoStarForks>{data.forksCount}</RepoStarForks>
              </RepoFlexConatiner>
            </RepoFlexConatiner>

            <CommitsIssueFlexContainer>
              <CommitsIssueContainer>
                <CommitsIssueHeading>Commits Count</CommitsIssueHeading>
                <CommitsIssue>{totalCommits}</CommitsIssue>
              </CommitsIssueContainer>

              <CommitsIssueFlexContainer>
                <CommitsIssueContainer>
                  <CommitsIssueHeading>Issues Count</CommitsIssueHeading>

                  <CommitsIssue>{data.openIssuesCount}</CommitsIssue>
                </CommitsIssueContainer>
              </CommitsIssueFlexContainer>
            </CommitsIssueFlexContainer>

            <Contributors>Contributors :</Contributors>
            <ContributorsCount>
              {`${commitsCount.length} Members`}
            </ContributorsCount>

            <ContributorsContainer>
              {commitsCount.map(eachContributors => (
                <ContributorsMembers
                  src={eachContributors.avatarUrl}
                  alt="contributor profile"
                />
              ))}
            </ContributorsContainer>
            {languageChartView()}
          </RepoLI>
        </RepoUl>
      </>
    )
  }

  const loaderView = () => (
    <LoaderContainer data-testid="loader">
      <TailSpin  color="#3B82F6" height={50} width={50} />
    </LoaderContainer>
  )

  const intialView = () => (
    <IntialContainer>
      <ErrorImage src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763435418/No_data-rafiki_kyhogv.png" />
      <ErrorMsg>No Repositories Found!</ErrorMsg>
    </IntialContainer>
  )

  const gotoHomePage = () => {
    const {history} = props
    history.replace('/')
  }

  const failureView = () => (
    <IntialContainer>
      <DataNotFound src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763713402/Empty_Box_Illustration_1_2_hqcrvq.png" />
      <ErrorMsg>No Data Found</ErrorMsg>
      <ErrorMessage>
        GitHub Username is empty, please provide a valid username for
        Repositories
      </ErrorMessage>
      <GoToHome onClick={gotoHomePage}>Go to Home</GoToHome>
    </IntialContainer>
  )
  const uiView = () => {
    const {status} = apiResponse

    switch (status) {
      case renderState.success:
        return repositoryItemSuccessView()
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
      <RepositoriesItemConatainer>{uiView()}</RepositoriesItemConatainer>
    </>
  )
}

export default RepositoryItemDetails

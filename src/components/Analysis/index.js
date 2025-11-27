import {useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import{TailSpin} from 'react-loader-spinner'
import Header from '../Header'
import AppContext from '../../context/AppContext'
import {
  AnalysisConatainer,
  AnalysisResponsiveConatainer,
  AnalysisHeading,
  PieHeading,
  PieChartContainer,
  IntialContainer,
  ErrorImage,
  ErrorMsg,
  ChartsFlexConatiner,
  CommitsChartsConatiner,
  ErrorMessage,
  GoToHome,
  DataNotFound,
  LoaderContainer,
} from './styledComponents'



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

const Analysis = () => {
  const {contextUsername} = useContext(AppContext)
  const navigate = useNavigate()
  const [responseApi, setApi] = useState({
    status: renderState.intial,
    data: [],
  })

  useEffect(() => {
    const analysisApi = async () => {
      if (contextUsername === '') {
        setApi(prevState => ({
          ...prevState,
          status: renderState.intial,
        }))

        return
      }
      setApi(prevState => ({
        ...prevState,
        status: renderState.loader,
      }))
     
      const token = Cookies.get('pat_token')
       const url = `https://apis2.ccbp.in/gpv/profile-summary/${contextUsername}?api_key=${token}`
      const options = {
        method: 'GET',
      }
      const response = await fetch(url, options)
      const responseData = await response.json()
     
      if (
        !response.ok 
      ) {
        setApi(prevState => ({
          ...prevState,
          status: renderState.failure,
        }))

        return
      }


      if (
  
      Object.entries(responseData.langCommitCount).length === 0 ||Object.entries(responseData.langCommitCount).every(
    ([key, value]) => value === 0 || Object.entries(responseData.langRepoCount).every(
    ([key, value]) => value === 0
  
  )
  )
      ) {
        setApi(prevState => ({
          ...prevState,
          status: renderState.intial,
        }))

        return
      }

      const destructureData = {
        langCommitCount: Object.entries(responseData.langCommitCount).map(
          ([key, value]) => ({
            lang: key,
            count: value,
          }),
        ),
        langRepoCount: Object.entries(responseData.langRepoCount).map(
          ([key, value]) => ({
            lang: key,
            count: value,
          }),
        ),
        quarterCommitCount: Object.entries(responseData.quarterCommitCount).map(
          ([key, value]) => ({
            year: key,
            commits: value,
          }),
        ),

        repoCommitCount: Object.entries(responseData.repoCommitCount).map(
          ([key, value]) => ({
            name: key,
            count: value,
          }),
        ),
      }

      setApi(prevState => ({
        ...prevState,
        data: destructureData,
        status: renderState.success,
      }))
    }

    analysisApi()
  }, [contextUsername])

  const analysisGraphView = () => {
    const {data} = responseApi
    const {quarterCommitCount} = data
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          style={{
            backgroundColor: '#132240',
            borderRadius: '15px',
          }}
          data={quarterCommitCount}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#3B82F6" strokeDasharray="3 3" />

          <XAxis
            dataKey="year"
            tick={{fill: '#3B82F6', fontSize: 14}}
            stroke="#3B82F6"
          />

          <YAxis tick={{fill: '#3B82F6', fontSize: 14}} stroke="#3B82F6" />

          <Tooltip
            contentStyle={{
              backgroundColor: '#132240',
              border: '1px solid #3B82F6',
            }}
            labelStyle={{color: '#3B82F6'}}
            itemStyle={{color: '#3B82F6'}}
          />

          <Line
            type="linear"
            dataKey="commits"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{fill: '#3B82F6', stroke: '#ffffff', r: 4}}
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  const repoChartView = () => {
    const {data} = responseApi
    const {langRepoCount} = data
    
    return (
      <div>
        <PieHeading>Language Per Repos</PieHeading>
        <PieChartContainer>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                cx="30%"
                cy="50%"
                data={langRepoCount}
                startAngle={0}
                endAngle={360}
                innerRadius="30%"
                outerRadius="60%"
                dataKey="count"
                nameKey="lang"
              >
                {langRepoCount.map(eachLanguage => {
                  let randomIndex = 0

                  const randomColor = Math.floor(
                    Math.random() * chatClors.length,
                  )

                  if (randomIndex !== randomColor) {
                    randomIndex = randomColor
                  }

                  return (
                    <Cell
                      key={eachLanguage.lang}
                      name={eachLanguage.lang}
                      fill={chatClors[randomIndex]}
                    />
                  )
                })}
              </Pie>
              <Legend
                iconType="square"
                iconSize={20}
                layout="vertical"
                verticalAlign="middle"
                align="right"
                formatter={(value, entry) => entry.payload.lang}
                wrapperStyle={{
                  fontSize: '14px',
                  lineHeight: '40px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </PieChartContainer>
      </div>
    )
  }

  const toprepoChartView = () => {
    const {data} = responseApi
    const {repoCommitCount} = data
   
    const top10Repos = repoCommitCount
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)

    return (
      <CommitsChartsConatiner>
        <PieHeading>Commits Per Repo (Top 10)</PieHeading>

        <ResponsiveContainer height={600}>
          <PieChart>
            <Pie
              cx="50%"
              cy="50%"
              data={top10Repos}
              startAngle={0}
              endAngle={360}
              innerRadius="40%"
              outerRadius="60%"
              dataKey="count"
            >
              {top10Repos.map(eachLanguage => {
                let randomIndex = 0

                const randomColor = Math.floor(
                  Math.random() * chatClors.length,
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
              iconSize={20}
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
      </CommitsChartsConatiner>
    )
  }

  const commitsChartView = () => {
    const {data} = responseApi
    const {langCommitCount} = data
   
    return (
      <div>
        <PieHeading>Language Per Commits</PieHeading>
        <PieChartContainer>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart className="top10-chart-view">
              <Pie
                cx="30%"
                cy="50%"
                data={langCommitCount}
                startAngle={0}
                endAngle={360}
                innerRadius="30%"
                outerRadius="60%"
                dataKey="count"
                nameKey="lang"
              >
                {langCommitCount.map(eachLanguage => {
                  let randomIndex = 0

                  const randomColor = Math.floor(
                    Math.random() * chatClors.length,
                  )

                  if (randomIndex !== randomColor) {
                    randomIndex = randomColor
                  }

                  return (
                    <Cell
                      key={eachLanguage.lang}
                      name={eachLanguage.lang}
                      fill={chatClors[randomIndex]}
                    />
                  )
                })}
              </Pie>
              <Legend
                iconType="square"
                iconSize={20}
                layout="vertical"
                verticalAlign="middle"
                align="right"
                formatter={(value, entry) => entry.payload.lang}
                wrapperStyle={{
                  fontSize: '14px',
                  lineHeight: '40px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </PieChartContainer>
      </div>
    )
  }
  const loaderView = () => (
    <LoaderContainer className="loader-container" data-testid="loader">
      <TailSpin  color="#3B82F6" height={50} width={50} />
    </LoaderContainer>
  )

  const intialView = () => (
    <IntialContainer>
      <ErrorImage
        src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763435418/No_data-rafiki_kyhogv.png"
        alt="empty analysis"
      />
      <ErrorMsg>No Analysis Found!</ErrorMsg>
    </IntialContainer>
  )

  const gotoHomePage = () => {
     navigate('/')  
  }

  const failureView = () => (
    <IntialContainer>
      <DataNotFound
        src="https://res.cloudinary.com/dwx8hebfs/image/upload/v1763713402/Empty_Box_Illustration_1_2_hqcrvq.png"
        alt="no analysis"
      />
      <ErrorMsg>No Data Found</ErrorMsg>
      <ErrorMessage>
        GitHub Username is empty, please provide a valid username for analysis
      </ErrorMessage>
      <GoToHome onClick={gotoHomePage}>Go to Home</GoToHome>
    </IntialContainer>
  )

  const AnalysisView = () => (
    <>
      <AnalysisHeading>Analysis</AnalysisHeading>
      {analysisGraphView()}
      <ChartsFlexConatiner>
        {repoChartView()}
        {commitsChartView()}
      </ChartsFlexConatiner>
      {toprepoChartView()}
    </>
  )

  const uiView = () => {
    const {status} = responseApi

    switch (status) {
      case renderState.success:
        return AnalysisView()
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
      <Header tab="Analysis" />
      <AnalysisConatainer>
        <AnalysisResponsiveConatainer>{uiView()}</AnalysisResponsiveConatainer>
      </AnalysisConatainer>
    </>
  )
}

export default Analysis

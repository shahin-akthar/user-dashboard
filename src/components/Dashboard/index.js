import ThemeContext from '../../context/ThemeContext'
import Header from "../Header"

import {DashboardContainer, WelComeMsg, About, Span, DetailsCard, DetailsContainer, Detail, User, Line} from './styledComponents'

const capitalizeName = (name) => {
  if (!name) return '';
  return name
    .split(' ') 
    .map(part => part[0].toUpperCase() + part.slice(1).toLowerCase()) 
    .join(' '); 
};

const Dashboard = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const user = JSON.parse(localStorage.getItem('userInfo'));

      return (
        <>
          <Header/>
          <DashboardContainer bgColor={isDarkTheme}>
            <WelComeMsg theme={isDarkTheme ? 'dark' : 'light'}>Welcome {capitalizeName(user.firstName) + ' ' + (user.lastName)}!</WelComeMsg>
            <About theme={isDarkTheme ? 'dark' : 'light'}>About Syoft:-<Span theme={isDarkTheme ? 'dark' : 'light'}>At Syoft, we’re dedicated to delivering top-notch custom software and digital solutions. Explore our latest features and updates designed to enhance your experience.</Span></About>
            <DetailsCard bgColor={isDarkTheme}>
              <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>First Name :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{capitalizeName(user.firstName)}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>Last Name :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.lastName ? (capitalizeName(user.lastName)) : 'Not Provided'}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>Email :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.email}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>Password:</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.password}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>Phone Number :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.number ? user.number : 'Not Provided'}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>City :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.city ? user.city : 'Not Provided'}</User>
                </DetailsContainer>
                <Line/>
                <DetailsContainer>
                  <Detail color={isDarkTheme ? 'dark' : 'light'}>Zip Code :</Detail>
                  <User theme={isDarkTheme ? 'dark' : 'light'}>{user.zipCode ? user.zipCode : 'Not Provided'}</User>
                </DetailsContainer>
            </DetailsCard>
          </DashboardContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Dashboard
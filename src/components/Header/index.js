import ThemeContext from '../../context/ThemeContext';
import PopUp from '../PopUp';

import { MdLightMode, MdDarkMode } from "react-icons/md";

import {HeaderBgContainer, ThemeIcon,LogoHeading, Span, LogoContainer, DetailsContainer, Profile} from './styledComponents';

const Header = props => (
    <ThemeContext.Consumer>
        {value => {
            const {isDarkTheme, toggleTheme, profileBgColor} = value

            const onToggleTheme = () => {
                toggleTheme()
            }

            const themeIcon = isDarkTheme ? <MdLightMode/> : <MdDarkMode/>
            let firstLetter = '';
            const storedUserData = localStorage.getItem('userInfo');

            if (storedUserData) {
                try {
                    const storedUser = JSON.parse(storedUserData);
                    const email = storedUser.email || ''; 
                    firstLetter = email[0].toUpperCase(); 
                } catch (error) {
                    console.error('Error parsing stored user data:', error);
                }
            }

            return (
                <HeaderBgContainer bgColor={isDarkTheme}>
                    <LogoContainer>
                        <LogoHeading>Syoft<Span>.</Span></LogoHeading>
                    </LogoContainer>
                    <DetailsContainer>
                        <ThemeIcon onClick={onToggleTheme} color={isDarkTheme}>{themeIcon}</ThemeIcon>
                        <Profile bgColor={profileBgColor}>{firstLetter}</Profile>
                        <PopUp/>
                    </DetailsContainer>
                </HeaderBgContainer>
            )
        }}
    </ThemeContext.Consumer>
)

export default Header
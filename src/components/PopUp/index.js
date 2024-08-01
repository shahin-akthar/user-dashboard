// PopUp.js
import { withRouter } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ThemeContext from '../../context/ThemeContext';
import { FiLogOut } from "react-icons/fi";
import { LogOutBtn, PopupContainer, ButtonsContainer, Message, YesOrNoButton, LogoutIcon, LogoutText } from './styledComponents';

const PopUp = props => (
  <ThemeContext.Consumer>
    {value => {
      const { isDarkTheme } = value;

      const onCLickLogout = () => {
        const {history} = props
        localStorage.removeItem('loggedIn');
        history.replace('/login')
      }
      
      return (
        <Popup
          modal
          trigger={
            <LogOutBtn theme={isDarkTheme ? 'dark' : 'light'}>
              <LogoutText>Logout</LogoutText>
              <LogoutIcon theme={isDarkTheme ? 'dark' : 'light'}>
                <FiLogOut size={25} />
              </LogoutIcon>
            </LogOutBtn>
          }
        >
          {close => (
                <PopupContainer theme={isDarkTheme ? 'dark' : 'light'}>
                  <Message theme={isDarkTheme ? 'dark' : 'light'}>
                    Are you sure, you want to logout?
                  </Message>
                  <ButtonsContainer>
                    <YesOrNoButton red type="button" outline onClick={() => close()}>
                      No
                    </YesOrNoButton>
                    <YesOrNoButton  type="button" onClick={onCLickLogout}>
                      Yes
                    </YesOrNoButton>
                  </ButtonsContainer>
                </PopupContainer>
              )}
        </Popup>
      );
    }}
  </ThemeContext.Consumer>
);

export default withRouter(PopUp);

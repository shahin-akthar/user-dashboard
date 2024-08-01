import styled from "styled-components";

const gradientStyles = {
  light: 'linear-gradient(to right, #662D8C, #ED1E79)', 
  dark: 'linear-gradient(to right, #A9F1DF, #FFBBBB)',  
};

export const PopupContainer = styled.div`
  background-color: ${props => props.theme === 'dark' ? 'black' : 'white'};
  height: 20vh;
  width: 30vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Georgia, serif;

  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
    padding: 15px;
  }

  @media (max-width: 520px) {
    width: 55vw;
    height: 20vh;
    padding: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    
    gap: 10px;
  }
`;

export const Message = styled.p`
  font-size: 20px;
  font-weight: 650;
  background: ${props => gradientStyles[props.theme]};
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 520px) {
    font-size: 16px;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const YesOrNoButton = styled.button`
  font-family: Georgia, serif;
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px;
  background-color: ${props => props.red ? 'red' : 'green'};
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  width: 80px;
  cursor: pointer;
  outline: none;

  @media (max-width: 768px) {
    width: 70px;
    height: 35px;
    font-size: 16px;
  }

  @media (max-width: 520px) {
    width: 60px;
    height: 30px;
    font-size: 14px;
  }
`;

export const LogOutBtn = styled.button`
  font-size: 18px;
  font-weight: 650;
  border-radius: 5px;
  border: 3px solid transparent;
  background: ${props => gradientStyles[props.theme]};
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
  cursor: pointer;
  border-image: ${props => gradientStyles[props.theme]} 1;
  outline: none;
  font-family: Georgia, serif;
  padding: 5px;
  margin-right: 20px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 4px;
    margin-right: 15px;
  }

  @media (max-width: 520px) {
    font-size: 14px;
    padding: 3px;
    margin-right: 10px;
  }
`;

export const LogoutIcon = styled.span`
  display: none;
  color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#000')};

  @media (max-width: 520px) {
    display: inline;
  }
`;

export const LogoutText = styled.span`
  display: inline;

  @media (max-width: 520px) {
    display: none;
  }
`;

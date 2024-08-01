import styled from "styled-components";

const gradientStyles = {
    light: 'linear-gradient(to right, #662D8C, #ED1E79)', 
    dark: 'linear-gradient(to right, #A9F1DF, #FFBBBB)',  
  };

  const about = {
    light: 'linear-gradient(to right, #166D3B, #1E453E, #1B8B00)', 
    dark: 'linear-gradient(319deg, #bbff99 0%, #ffec99 37%, #ff9999 100%)',  
  };

  export const DashboardContainer = styled.div`
  background-color: ${props => props.bgColor ? '#333333' : '#ebe8e8'};
  min-height: 100vh;
  padding-top: 50px;
  font-family: Georgia, serif;
  font-style: italic;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const WelComeMsg = styled.p`
background: ${props => gradientStyles[props.theme]};
-webkit-background-clip: text;
color: transparent;
background-clip: text;
padding-top: 20px;
font-size: 25px;
font-weight: 650;
width: 50%;
text-align: center;

 @media (max-width: 520px) {
    font-size: 20px;
    padding-top: 10px;
  }

 @media (max-width: 780px) {
    font-size: 20px;
    padding-top: 10px;
  }
`

export const About = styled.p`
color: ${props => props.theme === 'dark' ? 'white' : 'black'};
align-self: flex-start;
font-size: 20px;
font-weight: bold;
padding-left: 20px;
padding-top:0;

 @media (max-width: 520px) {
    font-size: 15px;
  }
    
  @media (max-width: 780px) {
    font-size: 17px;
  }`

export const Span = styled.span`
background: ${props => about[props.theme]};
-webkit-background-clip: text;
color: transparent;
background-clip: text;
font-size: 20px;
font-weight: bold;
padding-left: 5px;
padding-top:0;
box-sizing: border-box;

@media (max-width: 520px) {
    font-size: 15px;
  }
    
  @media (max-width: 780px) {
    font-size: 17px;
  }`

export const DetailsCard = styled.div`
  background-color: ${props => props.bgColor ? 'black' : 'white'};
  width: 30%;
  height: 60vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;  
  align-items: center;
  padding: 20px; 
  box-sizing: border-box;

  @media (max-width: 520px) {
    width: 80%;
  }

  @media (max-width: 780px) {
    width: 60%;
    height: 60%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  margin-bottom: 5px; 
  width: 100%; 

  @media (max-width: 520px) {
    margin-bottom: 0px;
  }

  @media (max-width: 780px) {
    margin-bottom: 0px;
  }
`;

export const Detail = styled.p`
  padding: 10px;
  color: ${props => props.color === 'dark' ? 'white' : 'black'};
  font-size: 17px;
  font-weight: 600;
  width: 50%;
  box-sizing: border-box;
  margin: 0; 
  padding-left: 30px;

  @media (max-width: 520px) {
    font-size: 15px;
  }
    @media (max-width: 780px) {
    font-size: 15px;
  }
`;

export const User = styled.p`
  padding: 10px;
  background: ${props => gradientStyles[props.theme]};
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
  box-sizing: border-box;
  font-size: 17px;
  font-weight: 600;
  margin: 0;
  width: 50% 

  @media (max-width: 520px) {
    font-size: 15px;
  }

  @media (max-width: 780px) {
    font-size: 15px;
  }
`;

export const Line = styled.hr`
color: silver;
width: 100%;`

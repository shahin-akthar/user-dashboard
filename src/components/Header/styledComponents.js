import styled from 'styled-components'

export const HeaderBgContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 99%;
    height: 50px;
    overflow: hidden;
    position: fixed;
    background-color: ${props => props.bgColor ? 'black' : 'white'};
    padding: 10px;
    color: ${props => props.bgColor ? 'white' : 'black'};
`

export const LogoContainer = styled.div`
flex: 1;`

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

export const LogoHeading = styled.h1`
padding-left: 10px;
font-size: 35px;
`

export const ThemeIcon = styled.button`
cursor: pointer;
background-color: transparent;
border: none;
font-size: 25px;
padding: 15px;
margin-top: 5px;
color: ${props => props.color ? 'white' : 'black'};`

export const Profile = styled.p`
font-size: 18px;
font-weight: 700;
color: ${props => props.color ? 'White' : 'black'};
background-color: ${props => props.bgColor};
margin-right: 25px;
margin-left: 10px;
padding: 7px;
border-radius: 50%; 
text-align: center;
color: white;
width: 17px;
height: 17px;
display: flex;
align-items: center;
justify-content: center;
font-family: Georgia, serif;
`

export const Span = styled.span`
color: rgb(255, 38, 0);`
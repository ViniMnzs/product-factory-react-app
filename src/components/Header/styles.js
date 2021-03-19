import styled from 'styled-components';
import { ReactComponent as LogoPf } from '../../assets/images/pf.svg';
import { colors } from '../../assets/utils/colors';

export const Container = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: sticky;
    top: 0;
    background-color: ${colors.B2};

    * { 
        color: ${colors.w1} !important;
        background-color: transparent;
    }

    @media screen and (max-width: 950px){
        padding: 5%;
        flex-direction: column;
        height: auto;
    }
`;

export const Button = styled.button`
    display: flex;
    height: 50%;
    padding: 1%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    outline: 0;
    :hover{
        background-color: rgba(172, 172, 172, 0.5)
    }
`;

export const Label = styled.span`
    text-align: center;
    font-size: 16px;
    padding: 10px;
`;

export const Logo = styled(LogoPf)`
    fill: ${colors.w1};
    width: 100px;
    height: 100%;
`;

export const Register = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    background-color: rgba(172, 172, 172, 0.1);
    border-radius: 20px;
    cursor: pointer;
    outline: 0;
    :hover{
        background-color: rgba(172, 172, 172, 0.4);
    }
`;

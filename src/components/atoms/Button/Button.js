import styled from 'styled-components';

export const Button = styled.button`
    margin: 15px 0;
    padding: 8px 20px;
    font-size: ${({theme}) => theme.fontSize.s};
    background-color: ${({theme}) => theme.colors.lightPurple.m};
    border-radius: 20px;
    border: none;
    font-weight: bold;
    color: ${({theme}) => theme.colors.darkGrey};
    cursor: pointer;
`;
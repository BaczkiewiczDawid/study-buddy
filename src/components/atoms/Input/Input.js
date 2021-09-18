import styled from 'styled-components';

export const Input = styled.input`
    padding: 5px 8px;
    border: 1px solid ${({theme}) => theme.colors.lightPurple};
    box-sizing: border-box;
    box-shadow: -2px 4px 10px rgba(155, 124, 142, .89);
    border-radius: 25px;

    &:focus {
        outline: none;
        box-shadow: -2px 4px 10px rgba(155, 124, 142, .3);
    }
`;

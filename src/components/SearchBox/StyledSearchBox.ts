import styled from 'styled-components';

export const StyledSearchBox = styled.div`
    position: relative;
    height: 3.25rem;
    border-radius: 26px;
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
`;

export const StyledInput = styled.div`
    #searchIcon{
        position: absolute;
        z-index: 2;
    }
    flex: 1;
    height: 3.25rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1.125rem;
    color: white;
    width: 100%;
    &:focus {
    outline: none;
    }
    &::placeholder {
    color: black;
    }
`

export const StyledSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: white;
  width: 98%;
  left: 1%;
  top: 3.35rem;
  border-radius: 3px;
  overflow: hidden;
`;

export const StyledSuggestion = styled.a`
color: ${({ theme }) => theme.colors.typography};
text-decoration: none;
padding: 0.6rem 1rem;
text-align: left;
border-bottom: 1px dotted ${({ theme }) => theme.colors.border};
font-size: 1rem;
cursor: pointer;
:hover {
  background-color: red;
}
`
import styled from 'styled-components';

export const StyledSearchBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items:center ;
  width: 50vw;
  min-width: 50vw;
  margin: 2rem;
  #searchIcon{
    position: absolute;
    z-index: 1;
    left: 26.5%;
    top: 2.5rem;
  }
  input{
    border-color: transparent;
    padding: .7rem;
    padding-left: 4rem;
    background-color: transparent;
    font-family: ${({ theme }) => theme.fonts.primary} ;
    font-size: 1.3rem;
    width: 100%;
    background: rgba( 255, 255, 255, 0.15 );
    backdrop-filter: blur( 2px );
    border-radius: 3rem;
    color: ${({ theme }) => theme.colors.typography.color};
    ::placeholder {
    color:  ${({ theme }) => theme.colors.placeholder.color};
    }
    :focus{
    outline: none;
    color: ${({ theme }) => theme.colors.typography.color}
    }
  }
`

export const StyledSuggestions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: white;
  width: 50vw;
  min-width: 50vw;
  top: 5.2rem;
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
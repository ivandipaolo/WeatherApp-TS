import styled from 'styled-components';

export const StyledSearchBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const StyledInput = styled.div`
  display: flex;
  justify-content: center;
  align-items:center ;
  width: 50vw;
  min-width: 50vw;
  margin: 2rem;
    border-width: 1px;
    border-color: #CCCCCC;
    background-color: #FFFFFF;
    color: #000000;
    border-style: solid;
    border-radius: 4px;
    box-shadow: 0px 0px 7px rgba(66,66,66,.75);
  #searchIcon{
    position: absolute;
    z-index: 1;
    left: 23%;
    top: 2.5rem;
  }
  input{
    width: 100%;
    padding: .7rem;
    padding-left: 3.5rem;
    font-size: 1.3rem;
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
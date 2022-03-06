import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    hr{
        margin: 0 auto 0 auto;
        width: 60%;
    }
    div{
        #switch{
            position:absolute;
            left: 42.5%;
        #forecast{
            width: 20rem;
            color: ${({theme}) => theme.colors.typography.color};
            font-family: ${({theme}) => theme.fonts.primary} ;
            font-weight: 400;
            font-size: 1.2rem;
            text-align: center;
            margin-right: 1rem;
        }
        }
    }
`
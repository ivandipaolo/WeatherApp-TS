import styled from "styled-components";

export const StyledForecastTwoDays = styled.div`
    display: flex ;
    overflow: auto;
    scroll-snap-type: x mandatory ;
    margin: 3rem 10vw 2rem 10vw;
    ::-webkit-scrollbar{
        height: 7px;
        width: 2px;
        background: ${({ theme }) => theme.colors.background.color};
    }
    ::-webkit-scrollbar-thumb:horizontal{
        background: #83c2da;
        border-radius: 25px;
    }
    background: rgba( 255, 255, 255, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0px );
    -webkit-backdrop-filter: blur( 0px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const StyledForecastedHour = styled.div`
    scroll-snap-align: start;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.typography.color};
    font-family: ${({ theme }) => theme.fonts.primary};
    text-align: center;
    h4{
        font-weight: 400;
    }
    h5{
        font-weight: 500;
    }
`
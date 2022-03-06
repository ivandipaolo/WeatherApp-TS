import styled from 'styled-components';

export const StyledCurrentWeather = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 25rem;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    height: fit-content;
    margin: 1rem auto 1rem auto;
    color: ${({ theme }) => theme.colors.typography.color};
    font-family: ${({ theme }) => theme.fonts.primary};
    #info{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 7rem;
        div{
            h1{
                font-weight: 700;
            }
            p{
                margin-top: 0px;
                font-weight: 500;
            }
        }
        h3{
            font-weight: 600;
        }
    }
    #weather{
        display: flex;
        width: 20rem;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        p{
            align-self: center;
            font-weight: 700;
            border: 1px solid white;
            border-top-right-radius: 40px;
            border-bottom-left-radius: 40px;
            width: 7rem;
            text-align: center;
        }
        #temperature{
            display: flex;
            flex-direction: row;
            align-items: center;
            div{
                margin-right:2rem ;
                h4{
                    span{
                        font-weight: 400;
                        font-size: 1.2rem;
                    }
                    font-weight: 600;
                    font-size: 1.5rem;
                }
                h5{
                    span{
                        font-weight: 400;
                        font-size: 1.2rem;
                    }
                    font-weight: 500;
                    font-size: 1.5rem;
                }
            }
        }
        h5{
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`
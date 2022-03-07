import styled from 'styled-components';

export const StyledWelcome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: fit-content;
    margin: .5rem 0% .5rem 0%;
    color: ${({ theme }) => theme.colors.typography.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    gap: 5rem;
    @media (max-width: 768px) {
        gap: 2rem;
        margin-bottom: 0%;
        margin-top: 2rem;
    }
    #info{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 7rem;
        @media (max-width: 768px) {
            gap: 1.5rem;
            flex-direction: row;
            align-items: center;
            margin: 0 1rem 0 1rem
        }
        div{
            h1{
                font-weight: 700;    
                font-size: 2.5rem;
                @media (max-width: 768px) {
                    font-size: 2rem;
                }
            }
        }
    }
    #weather{
        display: flex;
        width: 20rem;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        @media (max-width: 768px) {
            justify-content:center;
            gap: 0.2rem
        }
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
            @media (max-width: 768px) {
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
            div{
                /* margin-right:2rem ; */
                @media (max-width: 768px) {
                    margin-right: 0%;
                    align-items:center ;
                }
                h4{
                    span{
                        font-weight: 400;
                        font-size: 1.2rem;    
                        @media (max-width: 768px) {
                            font-size: 1rem;
                        }
                    }
                    font-weight: 600;
                    font-size: 1.5rem;
                    @media (max-width: 768px) {
                            font-size: 1.2rem;
                    }
                }
                h5{
                    span{
                        font-weight: 400;
                        font-size: 1.2rem;
                        @media (max-width: 768px) {
                            font-size: 1rem;
                        }
                    }
                    font-weight: 400;
                    font-size: 1.5rem;
                    @media (max-width: 768px) {
                            font-size: 1.2rem;
                    }
                }
            }
        }
        h5{
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
    #date{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h3{
            font-size: 2rem;
            font-weight: 600;
            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }
        p{
            margin-top: 0px;
            font-weight: 500;
            @media (max-width: 768px) {
                font-size: .8rem;
            }
        }
    }
`

export const StyledMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2rem 5rem 2rem 5rem;
    gap: 2rem;
    img {
        height: 200px;
    }
`

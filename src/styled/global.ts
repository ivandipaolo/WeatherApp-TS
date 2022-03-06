import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
        box-sizing: border-box;
    }
    
    body {        
        background-color: ${({ theme }) => theme.colors.gradientBackground.color};
        background: ${({ theme }) => theme.colors.gradientBackground.background};
        font-family: ${({ theme }) => theme.fonts.primary};
        color: ${({ theme }) => theme.colors.typography.color};
    }
    
    main{
        padding: 0 16px;
    }
    `
    ;
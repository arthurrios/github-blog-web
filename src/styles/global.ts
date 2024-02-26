import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.BLUE};
  }

  body {
    background: ${({ theme }) => theme.COLORS.BASE_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    ${({ theme }) => theme.FONTS.TEXT_M}
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  }

  button {
    border: none;
    cursor: pointer;

    &:focus {
      border: none;
    }
  }

  a:focus {
    outline: none;
    cursor: pointer;
  }
`

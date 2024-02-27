import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 54rem;
  margin: 0 auto;
`
export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  width: 100%;

  a {
    color: ${({ theme }) => theme.COLORS.BLUE};
  }

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    ${({ theme }) => theme.FONTS.TITLE_M}
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
  }

  ul {
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.COLORS.BASE_POST};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`

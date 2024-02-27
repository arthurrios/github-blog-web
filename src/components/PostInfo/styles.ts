import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  width: 54rem;
  margin-top: -5.5rem;
  z-index: 10;
  padding: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => theme.COLORS.BASE_PROFILE};
`
export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    margin-top: 1.25rem;
    ${({ theme }) => theme.FONTS.TITLE_L}
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
    margin-bottom: 0.5rem;
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  > div {
    color: ${({ theme }) => theme.COLORS.BASE_SPAN};
  }
`

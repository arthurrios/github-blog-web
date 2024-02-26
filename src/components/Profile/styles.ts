import styled from 'styled-components'

export const ProfileContainer = styled.div`
  position: relative;

  height: 13.25rem;
  width: 54rem;
  margin-top: -5.5rem;
  z-index: 10;

  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  background: ${({ theme }) => theme.COLORS.BASE_PROFILE};

  > div {
    position: absolute;
    left: 2.5rem;
    top: 2rem;

    display: flex;
    gap: 32px;
    align-items: center;
  }
`
export const ProfileImg = styled.img`
  height: 9.25rem;
  width: 9.25rem;

  border-radius: 8px;
`
export const Bio = styled.div`
  h1 {
    ${({ theme }) => theme.FONTS.TITLE_L}
    color: ${({ theme }) => theme.COLORS.BASE_TITLE};
    margin-bottom: 0.5rem;
  }

  span {
    color: ${({ theme }) => theme.COLORS.BASE_TEXT};
  }
`
export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 1.5rem;
`

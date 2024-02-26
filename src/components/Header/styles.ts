import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  background: ${({ theme }) => theme.COLORS.BASE_PROFILE};
  padding: 4rem 0 8.375rem;
  overflow: hidden;
`
export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const EffectLeft = styled.img`
  position: absolute;
  bottom: 38px;
`
export const EffectRight = styled.img`
  position: absolute;
  right: 0;
  bottom: 30px;
`
export const CircleBlur = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.COLORS.BLUR};
  border-radius: 50%;
  filter: blur(400px);
`
export const RectangleBlur = styled.div`
  position: absolute;
  width: 55.75rem;
  height: 3.25rem;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 9px;

  background: ${({ theme }) => theme.COLORS.BLUR};
  filter: blur(212px);
`

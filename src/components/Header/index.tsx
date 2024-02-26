import {
  CircleBlur,
  EffectLeft,
  EffectRight,
  HeaderContainer,
  HeaderContent,
  RectangleBlur,
} from './styles'
import logoImg from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
      </HeaderContent>

      <EffectLeft src={effectLeft} />
      <EffectRight src={effectRight} />

      <CircleBlur
        style={{
          height: '14.75rem',
          width: '14.75rem',
          top: '-96px',
          left: '-130px',
        }}
      />

      <CircleBlur
        style={{
          height: '9.75rem',
          width: '9.75rem',
          top: '-52px',
          right: '10px',
          transform: 'rotate(-15deg)',
        }}
      />

      <RectangleBlur />
    </HeaderContainer>
  )
}

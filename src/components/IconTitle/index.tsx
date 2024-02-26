import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconTitleContainer } from './styles'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IconTitleProps {
  icon: IconProp
  title: string
  variant?: 'home' | 'post'
}

export function IconTitle({ title, icon, variant = 'home' }: IconTitleProps) {
  return (
    <IconTitleContainer variant={variant}>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </IconTitleContainer>
  )
}

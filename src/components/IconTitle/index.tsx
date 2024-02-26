import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconTitleContainer } from './styles'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface IconTitleProps {
  icon: IconProp
  title: string
}

export function IconTitle({ title, icon }: IconTitleProps) {
  return (
    <IconTitleContainer>
      <FontAwesomeIcon icon={icon} />
      <span>{title}</span>
    </IconTitleContainer>
  )
}

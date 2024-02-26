import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { LinkContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes, RefAttributes } from 'react'

interface LinkProps
  extends RefAttributes<HTMLAnchorElement>,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconProp
  iconLeft?: boolean
  iconRight?: boolean
  link: string
  title: string
}

export function RouterLink({
  link,
  title,
  iconLeft,
  iconRight,
  icon,
  ...props
}: LinkProps) {
  return (
    <LinkContainer to={link} {...props}>
      {iconLeft && <FontAwesomeIcon icon={icon} />}
      <h4>{title}</h4>
      {iconRight && <FontAwesomeIcon icon={icon} />}
    </LinkContainer>
  )
}

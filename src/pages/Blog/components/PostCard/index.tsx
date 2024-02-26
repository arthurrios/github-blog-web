import { ButtonHTMLAttributes } from 'react'
import { Description, PostCardContainer } from './styles'

interface PostCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  createdAt: string
  description: string
}

export function PostCard({ title, description, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <div>
        <h2>{title}</h2>
        <span>{createdAt}</span>
      </div>
      <Description>{description}</Description>
    </PostCardContainer>
  )
}

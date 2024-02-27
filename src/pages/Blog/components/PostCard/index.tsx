import { ButtonHTMLAttributes } from 'react'
import { Description, PostCardContainer } from './styles'
import { PostDTO } from '../../../../dtos/PostDTO'
import { formatDate } from '../../../../utils/formatDate'

interface PostCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  postData: PostDTO
  isLoading: boolean
}

export function PostCard({ postData, isLoading }: PostCardProps) {
  if (!isLoading) {
    return (
      <PostCardContainer>
        <div>
          <h2>{postData.title}</h2>
          <span>{formatDate(postData.created_at)}</span>
        </div>
        <Description>{postData.body}</Description>
      </PostCardContainer>
    )
  }
}

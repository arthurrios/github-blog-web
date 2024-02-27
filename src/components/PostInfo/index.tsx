import { useNavigate } from 'react-router-dom'
import { RouterLink } from '../RouterLink'
import { Info, PostInfoContainer, PostInfoContent } from './styles'
import { IconTitle } from '../IconTitle'
import { PostContentDTO } from '../../dtos/PostContentDTO'
import { formatDate } from '../../utils/formatDate'

interface PostInfoProps {
  postData: PostContentDTO
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostInfoProps) {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1)
  }

  return (
    <PostInfoContainer>
      {!isLoading && (
        <>
          <PostInfoContent>
            <RouterLink
              link="#"
              title="back"
              onClick={handleGoBack}
              iconLeft
              icon={['fas', 'chevron-left']}
            />
            <h1>{postData.title}</h1>

            <Info>
              <IconTitle
                icon={['fab', 'github']}
                title={postData.user.login}
                $variant="post"
              />
              <IconTitle
                icon={['fas', 'calendar-day']}
                title={formatDate(postData.created_at)}
                $variant="post"
              />
              <IconTitle
                icon={['fas', 'comment']}
                title={`${postData.comments} comments`}
                $variant="post"
              />
            </Info>
          </PostInfoContent>
          <RouterLink
            link="#"
            title="see at github"
            iconRight
            icon={['fas', 'arrow-up-right-from-square']}
          />
        </>
      )}
    </PostInfoContainer>
  )
}

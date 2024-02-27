import { UserDTO } from '../../dtos/UserDTO'
import { IconTitle } from '../IconTitle'
import { RouterLink } from '../RouterLink'
import {
  Bio,
  Info,
  ProfileContainer,
  ProfileContent,
  ProfileImg,
} from './styles'

interface ProfileProps {
  userData: UserDTO
  isLoading: boolean
}

export function Profile({ isLoading, userData }: ProfileProps) {
  return (
    <ProfileContainer>
      {!isLoading && (
        <ProfileContent>
          <ProfileImg src={userData.avatar_url} />
          <Bio>
            <h1>Arthur Rios</h1>
            <span>{userData.bio}</span>

            <Info>
              <IconTitle icon={['fab', 'github']} title={userData.login} />
              <IconTitle icon={['fas', 'building']} title={userData.company} />
              <IconTitle
                icon={['fas', 'user-group']}
                title={`${userData.followers} followers`}
              />
            </Info>

            <RouterLink
              title="github"
              link={userData.html_url}
              icon={['fas', 'arrow-up-right-from-square']}
              iconRight
              style={{ position: 'absolute', top: '40px', right: '32px' }}
            />
          </Bio>
        </ProfileContent>
      )}
    </ProfileContainer>
  )
}

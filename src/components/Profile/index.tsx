import { IconTitle } from '../IconTitle'
import { RouterLink } from '../RouterLink'
import { Bio, Info, ProfileContainer, ProfileImg } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <div>
        <ProfileImg src="https://github.com/arthurrios.png" />
        <Bio>
          <h1>Arthur Rios</h1>
          <span>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </span>

          <Info>
            <IconTitle icon={['fab', 'github']} title="arthurrios" />
            <IconTitle icon={['fas', 'building']} title="RIOS" />
            <IconTitle icon={['fas', 'user-group']} title="32 seguidores" />
          </Info>

          <RouterLink
            title="github"
            link="https://github.com/arthurrios"
            icon={['fas', 'arrow-up-right-from-square']}
            iconRight
            style={{ position: 'absolute', top: 0, right: '32px' }}
          />
        </Bio>
      </div>
    </ProfileContainer>
  )
}

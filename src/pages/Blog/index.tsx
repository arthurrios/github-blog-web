import { Input } from '../../components/Input'
import { Profile } from '../../components/Profile'
import { BlogContainer, SearchForm } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <SearchForm>
        <div>
          <h3>Posts</h3>
          <span>6 posts</span>
        </div>
        <Input placeholder="Search content" />
      </SearchForm>
    </BlogContainer>
  )
}

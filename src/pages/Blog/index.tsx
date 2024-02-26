import { Input } from '../../components/Input'
import { Profile } from '../../components/Profile'
import { PostCard } from './components/PostCard'
import { BlogContainer, Posts, SearchForm } from './styles'

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
      <Posts>
        {Array.from({ length: 6 }, (_, index) => (
          <PostCard
            key={index}
            title="JavaScript data types and data structures"
            createdAt="1 day ago"
            description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

            Dynamic typing
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
            
            let foo = 42; // foo is now a number
            foo = 'bar'; // foo is now a string
            foo = true; // foo is now a boolean"
          />
        ))}
      </Posts>
    </BlogContainer>
  )
}

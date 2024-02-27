import { useEffect, useState } from 'react'
import { Input } from '../../components/Input'
import { Profile } from '../../components/Profile'
import { PostCard } from './components/PostCard'
import { BlogContainer, Posts, SearchForm } from './styles'
import { api } from '../../libs/axios'
import { env } from '../../env'
import { UserDTO } from '../../dtos/UserDTO'
import { PostDTO } from '../../dtos/PostDTO'

const username = env.VITE_GITHUB_USERNAME
const repoName = env.VITE_GITHUB_REPONAME

export function Blog() {
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState<UserDTO>({} as UserDTO)
  const [posts, setPosts] = useState<PostDTO[]>([] as PostDTO[])

  async function getUserData() {
    try {
      setIsLoading(true)
      const response = await api.get(`users/${username}`)

      setUserData(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function getPosts() {
    try {
      setIsLoading(true)
      const response = await api.get(`repos/${username}/${repoName}/issues`)

      setPosts(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
    getPosts()
  }, [])

  return (
    <BlogContainer>
      <Profile isLoading={isLoading} userData={userData} />
      <SearchForm>
        <div>
          <h3>Posts</h3>
          <span>6 posts</span>
        </div>
        <Input placeholder="Search content" />
      </SearchForm>
      <Posts>
        {posts.map((post) => {
          return (
            <PostCard isLoading={isLoading} key={post.number} postData={post} />
          )
        })}
      </Posts>
    </BlogContainer>
  )
}

import { useCallback, useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { PostCard } from './components/PostCard'
import { BlogContainer, Posts } from './styles'
import { api } from '../../libs/axios'
import { env } from '../../env'
import { UserDTO } from '../../dtos/UserDTO'
import { PostDTO } from '../../dtos/PostDTO'
import { SearchForm } from './components/SearchForm'

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

  const getPosts = useCallback(async (query: string = '') => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${repoName}`,
      )

      setPosts(response.data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getUserData()
    getPosts()
  }, [getPosts])

  return (
    <BlogContainer>
      <Profile isLoading={isLoading} userData={userData} />
      <SearchForm postsLength={posts.length} getPosts={getPosts} />
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

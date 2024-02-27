import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormProps {
  getPosts: (query?: string) => Promise<void>
  postsLength: number
}

export function SearchForm({ getPosts, postsLength }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    getPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h3>Posts</h3>
        <span>{postsLength} posts</span>
      </div>
      <input type="text" placeholder="Search content" {...register('query')} />
    </SearchFormContainer>
  )
}

import ReactMarkdown from 'react-markdown'
import { useCallback, useEffect, useState } from 'react'
import { PostInfo } from '../../components/PostInfo'
import { api } from '../../libs/axios'
import { PostContainer, PostContent } from './styles'
import { PostContentDTO } from '../../dtos/PostContentDTO'
import { env } from '../../env'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useParams } from 'react-router-dom'

const username = env.VITE_GITHUB_USERNAME
const repoName = env.VITE_GITHUB_REPONAME

export function Post() {
  const [content, setContent] = useState<PostContentDTO>({} as PostContentDTO)
  const [isLoading, setIsLoading] = useState(true)

  const { postNumber } = useParams()

  const fetchPost = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(
        `repos/${username}/${repoName}/issues/${postNumber}`,
      )

      setContent(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [postNumber])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostContainer>
      <PostInfo isLoading={isLoading} postData={content} />
      <PostContent>
        <ReactMarkdown
          components={{
            code(props) {
              const { children, className, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  language={match[1]}
                  style={dracula}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        >
          {content.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}

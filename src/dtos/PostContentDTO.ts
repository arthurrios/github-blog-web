export interface PostContentDTO {
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

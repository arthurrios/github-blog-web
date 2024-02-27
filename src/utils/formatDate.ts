import { formatDistanceToNow } from 'date-fns'

export function formatDate(date: string) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

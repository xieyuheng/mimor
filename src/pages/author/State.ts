import { State as SearchState } from '../../components/search/State'
import { User } from '../../models/user/User'
import { Entry } from './Entry'

export type State = {
  username: string
  user?: User
  isSelf: boolean
  entries: Array<Entry>
  searchState: SearchState
  isSearching?: boolean
  isRefreshing?: boolean
  lastRefreshedAt?: number
  eagerLoadAll?: boolean
  focusedSrc?: string
  scrollToTopTick?: number
  isAtTheTop?: boolean
}

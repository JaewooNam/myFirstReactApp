// action + action creator
import _ from 'loadash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response })
}

export const fetchUser = id => dispatch => _fetchUser(id, dispatch)
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
})

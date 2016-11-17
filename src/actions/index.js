export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const selectSubreddit = (reddit) => ({
  type: SELECT_SUBREDDIT,
  reddit
})

export const invalidateSubreddit = (reddit) => ({
  type: INVALIDATE_SUBREDDIT,
  reddit
})

export const requestPosts = (reddit) => ({
  type: REQUEST_POSTS,
  reddit
})

export const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

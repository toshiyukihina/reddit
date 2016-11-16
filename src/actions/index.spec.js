import * as actions from './index'

describe('actions', () => {
  it('selectSubreddit create SELECT_SUBREDDIT action', () => {
    expect(
      actions.selectSubreddit('redux')
    ).toEqual({
      type: actions.SELECT_SUBREDDIT,
      subreddit: 'redux'
    })
  })

  it('invalidateSubreddit create INVALIDATE_SUBREDDIT action', () => {
    expect(
      actions.invalidateSubreddit('redux')
    ).toEqual({
      type: actions.INVALIDATE_SUBREDDIT,
      subreddit: 'redux'
    })
  })

  it('requestPosts create REQUEST_POSTS action', () => {
    expect(
      actions.requestPosts('redux')
    ).toEqual({
      type: actions.REQUEST_POSTS,
      subreddit: 'redux'
    })
  })

  it('receivePosts create RECEIVE_POSTS action', () => {
    expect(
      actions.receivePosts('redux', {
        data: {
          children: []
        }
      })
    ).toEqual({
      type: actions.RECEIVE_POSTS,
      subreddit: 'redux',
      posts: [],
      receivedAt: Date.now()
    })
  })
})

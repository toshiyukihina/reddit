import * as actions from './index'

describe('actions', () => {
  it('selectReddit create SELECT_REDDIT action', () => {
    expect(
      actions.selectReddit('redux')
    ).toEqual({
      type: actions.SELECT_REDDIT,
      reddit: 'redux'
    })
  })

  it('invalidateReddit create INVALIDATE_REDDIT action', () => {
    expect(
      actions.invalidateReddit('redux')
    ).toEqual({
      type: actions.INVALIDATE_REDDIT,
      reddit: 'redux'
    })
  })

  it('requestPosts create REQUEST_POSTS action', () => {
    expect(
      actions.requestPosts('redux')
    ).toEqual({
      type: actions.REQUEST_POSTS,
      reddit: 'redux'
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
      reddit: 'redux',
      posts: [],
      receivedAt: Date.now()
    })
  })

  xit('fetchPosts fetch posts about some reddit', () => {
    expect(
      actions.fetchPostsIfNeeded('reactjs')
    )
  })
})

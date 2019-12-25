import reducer, { initialState } from './reducers'
import { ActionTypes as types } from './constants'

let newsMock = {
  "totalResults": 2,
  "articles": [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Marc DeAngelis",
      "title": "Apple's App Store holiday giveaway starts today - Engadget",
      "description": "Apple will offer free App Store downloads to celebrate the holidays this week.",
      "url": "https://www.engadget.com/2019/12/24/apples-app-store-giveaway-starts-today/",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-12%252Fa1b476a0-2671-11ea-bdf9-c78a390a7485%26client%3Da1acac3e1b3290917d92%26signature%3Df110e5a2b6f1cbe15d4bb92f88de7fdfbfd6eda5&client=amp-blogside-v2&signature=06bc42e489d0ac77f4611c7a2ac1322508e7e97c",
      "publishedAt": "2019-12-24T19:31:53Z",
      "content": "In 2008, Apple launched an app called \"12 Days of Gifts,\" which served a similar purpose. Each day during the 12 Days of Christmas, a free download would be available, spanning songs, apps, ebooks, movies and games. It's been five years since the company disc… [+272 chars]"
    }
  ]
}

let newsMock_2 = {
  "totalResults": 2,
  "articles": [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Marc DeAngelis",
      "title": "Apple's App Store holiday giveaway starts today - Engadget",
      "description": "Apple will offer free App Store downloads to celebrate the holidays this week.",
      "url": "https://www.engadget.com/2019/12/24/apples-app-store-giveaway-starts-today/",
      "urlToImage": "https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-12%252Fa1b476a0-2671-11ea-bdf9-c78a390a7485%26client%3Da1acac3e1b3290917d92%26signature%3Df110e5a2b6f1cbe15d4bb92f88de7fdfbfd6eda5&client=amp-blogside-v2&signature=06bc42e489d0ac77f4611c7a2ac1322508e7e97c",
      "publishedAt": "2019-12-24T19:31:53Z",
      "content": "In 2008, Apple launched an app called \"12 Days of Gifts,\" which served a similar purpose. Each day during the 12 Days of Christmas, a free download would be available, spanning songs, apps, ebooks, movies and games. It's been five years since the company disc… [+272 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Espn.com"
      },
      "author": null,
      "title": "Sources -- Lakers' LeBron James, Anthony Davis expected to play vs. Clippers - ESPN",
      "description": "The Lakers will have LeBron James and Anthony Davis on the court for their Christmas showdown with the Clippers, league sources told ESPN.",
      "url": "https://www.espn.com/nba/story/_/id/28366221/sources-lakers-lebron-james-anthony-davis-expected-play-vs-clippers",
      "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F1214%2Fr641255_1296x729_16%2D9.jpg",
      "publishedAt": "2019-12-24T18:31:32Z",
      "content": "The Los Angeles Lakers will have their stars on the court for a Christmas Day showdown with the LA Clippers.\r\nLeBron James and Anthony Davis are expected to play on Wednesday, league sources told ESPN. James missed a game for the first time all season Sunday … [+2065 chars]"
    }
  ]
}

let sources = { sources: [{
  "id": "abc-news",
  "name": "ABC News",
  "description": "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
  "url": "https://abcnews.go.com",
  "category": "general",
  "language": "en",
  "country": "us"
},
{
  "id": "abc-news-au",
  "name": "ABC News (AU)",
  "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
  "url": "http://www.abc.net.au/news",
  "category": "general",
  "language": "en",
  "country": "au"
}]}

test('should be return init fetch news', () => {
  const before = initialState

  const action = { type: types.FETCH_NEWS }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    news: {
      articles: [],
      totalResults: 0
    },
    sources: [],
    fetchingNews: true,
    pageSize: 5,
    hasMoreNews: false,
    source: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source', () => {
  const before = initialState

  const action = { type: types.FETCH_NEWS_BY_SOURCE }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    news: {
      articles: [],
      totalResults: 0
    },
    sources: [],
    fetchingNews: true,
    pageSize: 5,
    hasMoreNews: false,
    source: ''
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_SUCCESS,
    payload: newsMock
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_BY_SOURCE_SUCCESS,
    payload: { ...newsMock, source: 'engadget' }
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: 'engadget',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news error', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_FAIL
  }

  const after = {
    fetchingNewsError: true,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch news by source error', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_NEWS_BY_SOURCE_FAIL
  }

  const after = {
    fetchingNewsError: true,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock.articles, totalResults: newsMock.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS_SUCCESS,
    payload: newsMock_2
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success with hasMoreNews true', () => {
  const before = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: true,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }

  const action = { 
    type: types.FETCH_MORE_NEWS_SUCCESS,
    payload: newsMock_2
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 10,
    source: '',
    hasMoreNews: true,
    news: { articles: newsMock_2.articles, totalResults: newsMock_2.totalResults }
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch source success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_MORE_NEWS_FAIL
  }

  const after = {
    fetchingNewsError: false,
    fetchingMore: false,
    sources: [],
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 },
    fetchingMoreNewsError: true
  }
  expect(reducer(before, action)).toEqual(after)
})

test('should be return init fetch more news success', () => {
  const before = initialState

  const action = { 
    type: types.FETCH_SOURCES_SUCCESS,
    payload: sources
  }

  const after = {
    fetchingNewsError: false,
    fetchingMoreNewsError: false,
    fetchingMore: false,
    sources: sources.sources,
    fetchingNews: false,
    pageSize: 5,
    source: '',
    hasMoreNews: false,
    news: { articles: [], totalResults: 0 }
  }
  expect(reducer(before, action)).toEqual(after)
})
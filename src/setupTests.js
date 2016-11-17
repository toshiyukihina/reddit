const DateMock = {
  now: jest.fn(() => { return 123456789 })
}

global.Date = DateMock

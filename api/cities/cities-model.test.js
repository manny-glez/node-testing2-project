const City = require('./cities-model');

describe('cites model', () => {
  test('returns all cities in the table', async () => {
    const cities = await City.getAll()
    expect(cities).toHaveLength(5)
  })
  test('returns cites in the correct shape', async () => {
    const expected = [
      {
        "id": 1,
        "city": "Chicago"
      },
      {
        "id": 2,
        "city": "LA"
      },
      {
        "id": 3,
        "city": "San Francisco"
      },
      {
        "id": 4,
        "city": "New York"
      },
      {
        "id": 4,
        "city": "Boston"
      }
    ]
    expect(await City.getAll()).toMatchObject(expected)
  })
})
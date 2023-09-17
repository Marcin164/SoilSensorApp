import axios from 'axios'

export const getAccount = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: 'http://localhost:3001/users/6451273b02c336b5e7c51345',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })

    return result.data
  } catch (error) {}
}

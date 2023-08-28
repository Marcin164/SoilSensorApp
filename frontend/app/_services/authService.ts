import axios from 'axios'

export const authenticate = async (email: string, password: string) => {
  try {
    const login = await axios({
      method: 'post',
      url: 'http://localhost:4000/login',
      data: {
        email,
        password,
      },
    })

    if (!login) throw Error('Cannot sign in')

    localStorage.setItem('accessToken', login.data.accessToken)
    localStorage.setItem('refreshToken', login.data.refreshToken)

    return login
  } catch (error) {
    return error
  }
}

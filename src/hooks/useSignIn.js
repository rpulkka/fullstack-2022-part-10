import { useApolloClient, useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)
  const authStorage = useAuthStorage()
  const client = useApolloClient()

  const signIn = async ({ username, password }) => {
    const returnObject = await mutate(
      {
        variables: {
          credentials: {
            username: username,
            password: password
          }
        }
      }
    )

    await authStorage.setAccessToken(returnObject.data.authenticate.accessToken)

    client.resetStore()

    return returnObject
  }

  return [signIn, result]
}

export default useSignIn
import { useMutation } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    const signedIn = await mutate(
      {
        variables: {
          credentials: {
            username: username,
            password: password
          }
        }
      }
    )

    return signedIn
  }

  return [signIn, result]
}

export default useSignIn
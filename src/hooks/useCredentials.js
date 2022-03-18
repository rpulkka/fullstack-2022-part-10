import { useQuery } from '@apollo/client'
import { GET_CREDENTIALS } from '../graphql/queries'

const useCredentials = (variables) => {
  const { data, error, loading } = useQuery(GET_CREDENTIALS, { variables, fetchPolicy: 'cache-and-network' })

  if (loading) {
    return {}
  }

  const credentials = data.me

  return { credentials, loading }
}

export default useCredentials
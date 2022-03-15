import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (repositoryId) => {

  const { data, error, loading } = useQuery(GET_REPOSITORY, { variables: { repositoryId: repositoryId } })

  if (loading) {
    return {}
  }

  const repository = data.repository

  return { repository, loading }
}

export default useRepository
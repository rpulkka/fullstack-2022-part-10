import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

const useRepositories = (repositoryId) => {
  const { data, error, loading } = useQuery(GET_REVIEWS, { variables: { repositoryId: repositoryId } })

  if (loading) {
    return {}
  }

  const reviews = data.repository.reviews.edges

  return { reviews, loading }
}

export default useRepositories
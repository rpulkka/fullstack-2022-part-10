import { useQuery } from '@apollo/client'
import { GET_REVIEWS } from '../graphql/queries'

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REVIEWS, { variables })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    reviews: data?.repository.reviews.edges,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositories
import { useMutation } from '@apollo/client'
import { ADD_REVIEW } from '../graphql/mutations'

const useRate = () => {
  const [mutate, result] = useMutation(ADD_REVIEW)

  const rate = async ({ owner, name, numericalRating, review }) => {
    const returnObject = await mutate(
      {
        variables: {
          review: {
            ownerName: owner,
            repositoryName: name,
            rating: numericalRating,
            text: review
          }
        }
      }
    )

    return returnObject
  }

  return [rate, result]
}

export default useRate
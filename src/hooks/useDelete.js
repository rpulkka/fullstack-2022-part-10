import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

const useDelete = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW)

  const deleteReview = async ({ id }) => {
    const returnObject = await mutate(
      {
        variables: {
          deleteReviewId: id
        }
      }
    )

    return returnObject
  }

  return [deleteReview, result]
}

export default useDelete
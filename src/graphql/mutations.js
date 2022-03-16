import { gql } from '@apollo/client'

export const AUTHENTICATE = gql`
  mutation ($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`

export const ADD_REVIEW = gql`
  mutation ($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        id
        ownerName
        name
      }
      rating
      text
    }
  }
`
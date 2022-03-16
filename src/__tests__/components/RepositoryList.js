import { render, within } from '@testing-library/react-native'
import { RepositoryListContainer } from '../../components/RepositoryList'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      }

      const mockNavigate = jest.fn()

      const { getAllByTestId } = render(<RepositoryListContainer
        repositoriesCreatedAt={repositories}
        repositoriesRatingDesc={repositories}
        repositoriesRatingAsc={repositories}
        navigate={mockNavigate}
      />)

      const repositoryItems = getAllByTestId('repositoryItem')
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems

      const firstRepositoryItemFooter = within(firstRepositoryItem).getByTestId('repositoryItemFooter')
      const secondRepositoryItemFooter = within(secondRepositoryItem).getByTestId('repositoryItemFooter')

      expect(firstRepositoryItem).toHaveTextContent('jaredpalmer/formik')
      expect(firstRepositoryItem).toHaveTextContent('Build forms in React, without the tears')
      expect(firstRepositoryItem).toHaveTextContent('TypeScript')
      expect(firstRepositoryItemFooter).toHaveTextContent('1.6k')
      expect(firstRepositoryItemFooter).toHaveTextContent('21.9k')
      expect(firstRepositoryItemFooter).toHaveTextContent('88')
      expect(firstRepositoryItemFooter).toHaveTextContent('3')

      expect(secondRepositoryItem).toHaveTextContent('async-library/react-async')
      expect(secondRepositoryItem).toHaveTextContent('Flexible promise-based React data loader')
      expect(secondRepositoryItem).toHaveTextContent('JavaScript')
      expect(secondRepositoryItemFooter).toHaveTextContent('69')
      expect(secondRepositoryItemFooter).toHaveTextContent('1.8k')
      expect(secondRepositoryItemFooter).toHaveTextContent('72')
      expect(secondRepositoryItemFooter).toHaveTextContent('3')
    })
  })
})
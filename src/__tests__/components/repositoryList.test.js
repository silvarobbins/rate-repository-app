import { render } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';



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
      };

      const formatThousands = (value) => {
        if (value >= 1000) {
          const newVal = value/1000
          return newVal.toFixed(1) + 'k'
        }
        else {
          return value
        }
      }

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const firstRepo = repositories.edges[0].node;
      const secondRepo = repositories.edges[1].node;
    
      const repositoryItems = getAllByTestId('repositoryItem');
      const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;

      expect(firstRepositoryItem).toHaveTextContent(firstRepo.fullName);
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.fullName);

      expect(firstRepositoryItem).toHaveTextContent(firstRepo.description);
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.description);

      expect(firstRepositoryItem).toHaveTextContent(firstRepo.language);
      expect(secondRepositoryItem).toHaveTextContent(secondRepo.language);

      expect(firstRepositoryItem).toHaveTextContent(formatThousands(firstRepo.forksCount));
      expect(secondRepositoryItem).toHaveTextContent(formatThousands(secondRepo.forksCount));

      expect(firstRepositoryItem).toHaveTextContent(formatThousands(firstRepo.stargazersCount));
      expect(secondRepositoryItem).toHaveTextContent(formatThousands(secondRepo.forksCount));

      expect(firstRepositoryItem).toHaveTextContent(formatThousands(firstRepo.ratingAverage));
      expect(secondRepositoryItem).toHaveTextContent(formatThousands(secondRepo.forksCount));


      expect(firstRepositoryItem).toHaveTextContent(formatThousands(firstRepo.reviewCount));
      expect(secondRepositoryItem).toHaveTextContent(formatThousands(secondRepo.forksCount));
    });
  });
});
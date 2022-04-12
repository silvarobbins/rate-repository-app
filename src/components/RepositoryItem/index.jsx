import { View, StyleSheet, Image } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white'
  },
  flexItemImage: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  flexItemDesc: {
    width: 0,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 30,
    paddingBottom: 10,
  },
  flexItemRates: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  languageBox: {
    flexGrow: 0,
    backgroundColor: theme.colors.primary,
    padding: 5,
    marginTop: 3,
    borderRadius: 3
  },
  ratingBox: {
    flexGrow: 1,
    alignItems: 'center',
    width: 100,
    padding: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 5
  },
})

const RepositoryItem = ({repository}) => {

  const formatThousands = (value) => {
    if (value >= 1000) {
      const newVal = value/1000
      return newVal.toFixed(1) + 'k'
    }
    else {
      return value
    }
  }

  return(
    
    <View style={styles.flexContainer} testID="repositoryItem">

      <View style={styles.flexItemImage}> 
        <Image
          style={styles.avatar}
          source={{uri: repository.ownerAvatarUrl}}
        />

        <View style={styles.flexItemDesc}>
          <Text fontWeight='bold'>{repository.fullName}</Text>
          <Text color='textSecondary' >{repository.description}</Text>
          <View style={styles.languageBox}>
            <Text color='white'>{repository.language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.flexItemRates}>
        <View style={styles.ratingBox}>
          <Text fontWeight={'bold'}>{formatThousands(repository.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.ratingBox}>
          <Text fontWeight={'bold'}>{formatThousands(repository.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.ratingBox}>
          <Text fontWeight={'bold'}>{formatThousands(repository.reviewCount)}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.ratingBox}>
          <Text fontWeight={'bold'}>{formatThousands(repository.ratingAverage)}</Text>
          <Text>Rating</Text>
        </View>
      </View>

    </View>
  )
};

export default RepositoryItem;
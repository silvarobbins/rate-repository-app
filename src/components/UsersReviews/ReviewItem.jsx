import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { format, parseISO } from "date-fns";
import { useNavigate } from 'react-router-native';

import Text from '../Text';
import Button from "../Button";

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'white'
  },
  flexItemTitle: {
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ratingBox: {
    width: 50,
    height: 50,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  flexItemInfo: {
    width: 0,
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingBottom: 10,
  },
  flexItemBody: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginLeft: 55
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteButton: {
    width: '47%',
    backgroundColor: '#db0909'
  },
  viewRepoButton: {
    width: '47%',
    backgroundColor: theme.colors.primary
  }
})


const ReviewItem = ({ review, onDelete }) => {
  const navigate = useNavigate()

  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemTitle}>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
          <View style={styles.flexItemInfo}>
            <Text fontWeight={'bold'}>{review.repository.fullName}</Text>
            <Text color='textSecondary'>{format(parseISO(review.createdAt), 'dd.MM.yyyy')}</Text>
          </View>
        </View>
      <View style={styles.flexItemBody}>
          <Text>{review.text}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.viewRepoButton} text={"View repository"} onPress={() => navigate(`/repository/${review.repository.id}`, { replace: true })} />
        <Button style={styles.deleteButton} text={"Delete review"} onPress={() => onDelete(review.id)}/>
      </View>
    </View>
  )
};


export default ReviewItem;
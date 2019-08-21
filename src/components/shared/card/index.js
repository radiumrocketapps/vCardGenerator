// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../constants/colors';
import styles from './styles';

type Props = {
  title: string,
  image: string,
  description: string,
  onSearchPress: () => void,
  onDeletePress: () => void,
}

const Card = (props: Props) => {
  const {
    title,
    image,
    description,
    onSearchPress,
    onDeletePress
  } = props;
  return (
    <View style={styles.CardContainer}>
      <Text style={styles.Title}>{title.toUpperCase()}</Text>
      <View style={styles.ImageContainer}>
        <Image style={styles.Image} source={image} />
      </View>
      <Text>{description}</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity>
          <Ionicons
            size={35}
            name="ios-search"
            onPress={onSearchPress}
            color={Colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            size={35}
            name="ios-trash"
            onPress={onDeletePress}
            color={Colors.blue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

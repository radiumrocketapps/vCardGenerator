// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../constants/colors';
import styles from './styles';

type Props = {
  title: string,
  image: string,
  description: string,
}

const Card = (props: Props) => {
  const { title, image, description } = props;
  return (
    <View style={styles.CardContainer}>
      <Text style={styles.Title}>{title.toUpperCase()}</Text>
      <Image style={styles.Image} source={image} />
      <Text>{description}</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity>
          <Ionicons
            size={35}
            name="ios-search"
            color={Colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            size={35}
            name="ios-trash"
            color={Colors.blue}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;

// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import QRCode from 'react-native-qrcode';
import Colors from '../../../../constants/colors';
import styles from './styles';

type Props = {
  title: string,
  image: string,
  description: string,
}

const mockedObject = {
  description: 'Damian',
  name: 'damian',
  phone: 155434553,
  address: 'ameghino',
  country: 'usa',
  email: 'damian.lingua@radiumrocket.com'
};

// structure for generate a vCard in ANDROID, NOT WORKING ON IOS... sad :(

// IMPORTANT: the string can not have empty spaces between the variables, otherwise, android wont recongnize the VCARD
const stringObject = `BEGIN:VCARD
VERSION:3.0
N:${mockedObject.name};${mockedObject.name}
FN:${mockedObject.name}
ADR;TYPE=home:;;;;;;${mockedObject.country}
TEL;TYPE=home:${mockedObject.phone.toString()}
EMAIL;TYPE=internet,home:${mockedObject.email}
END:VCARD`.toString();

const Card = (props: Props) => {
  const { title, image, description } = props;
  return (
    <View style={styles.CardContainer}>
      <Text style={styles.Title}>{title.toUpperCase()}</Text>
      {/* <Image style={styles.Image} source={image} /> */}
      <QRCode
        value={stringObject}
        size={200}
        bgColor="black"
        fgColor="white"
      />
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

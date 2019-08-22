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
import Colors from '../../../constants/colors';
import type { QrData } from '../../../redux/modules/vCard/types';
import styles from './styles';

type Props = {
  title: string,
  description: string,
  onSearchPress: () => void,
  onDeletePress: () => void,
  values: QrData,
}

const mockedObject = {
  description: 'Damian',
  name: 'damian',
  phone: 155434553,
  address: 'ameghino',
  country: 'usa',
  email: 'damian.lingua@radiumrocket.com'
};

const Card = (props: Props) => {
  const {
    title,
    description,
    onSearchPress,
    onDeletePress,
    values,
  } = props;

// IMPORTANT: the string can not have empty spaces between the variables, otherwise, android wont recongnize the VCARD
const stringObject = `BEGIN:VCARD
VERSION:3.0
N:${values.name};${values.name}
FN:${values.name}
ORG:${values.company}
EMAIL:${values.emailAddress}
ROLE:${values.title}
TEL;TYPE=home:${values.phoneNumber.toString()}
ADR;TYPE=intl,work,postal,parcel:;;${values.country}
ADR;TYPE=home:;;;;;;${values.address}
END:VCARD`.toString();

  return (
    <View style={styles.CardContainer}>
      <Text style={styles.Title}>{title.toUpperCase()}</Text>
      <View style={styles.QrCodeContainer}>
        <QRCode
          value={stringObject}
          size={200}
          bgColor="black"
          fgColor="white"
        />
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

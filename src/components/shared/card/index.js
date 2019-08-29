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
import { MODAL } from '../../../navigation/screens';

type Props = {
  title: string,
  onSearchPress: () => void,
  onDeletePress: () => void,
  values: QrData,
}

const mockedObject = {
  description: 'Damian',
  name: 'damian',
  phone: 155434553,
  address: 'testAdress',
  country: 'usa',
  email: 'damian.lingua@radiumrocket.com'
};

const Card = (props: Props) => {
  const {
    title,
    onSearchPress,
    onDeletePress,
    values,
    navigation
  } = props;

// IMPORTANT: the string can not have empty spaces between the variables, otherwise, android wont recongnize the VCARD
const stringObject = `BEGIN:VCARD
VERSION:3.0
N:${values.name};${values.name}
FN:${values.name}
ORG:${values.company ? values.company : ''}
EMAIL:${values.emailAddress ? values.emailAddress.toLowerCase() : ''}
ROLE:${values.title ? values.title : ''}
TEL;TYPE=home:${values.phoneNumber.toString()}
ADR;TYPE=intl,work,postal,parcel:;;${values.country ? values.country : ''}
ADR;TYPE=home:;;;;;;${values.address ? values.address : ''}
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
      <View style={styles.Description}>
        <Text
          style={[styles.TextDescription, {color: Colors.blue, fontWeight: 'bold'}]}
        >
          {values.description}
        </Text>
        <Text style={styles.TextDescription}>{values.name}</Text>
        <Text style={styles.TextDescription}>{values.phoneNumber}</Text>
        <Text style={styles.TextDescription}>{values.emailAddress && values.emailAddress}</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity>
          <Ionicons
            size={35}
            name="ios-search"
            onPress={() => navigation.navigate(MODAL, {stringObject, values})}
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

// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationScreenProps } from 'react-navigation';
import QRCode from 'react-native-qrcode';
import Colors from '../../../constants/colors';
import type { QrData } from '../../../redux/modules/vCard/types';
import styles from './styles';
import { MODAL } from '../../../navigation/screens';
import ModalWarning from '../../screens/modalWarning';

type Props = NavigationScreenProps & {
  title: string,
  onDeletePress: () => void,
  values: QrData,
}

type State = {
  openModal: boolean,
}


class Card extends React.Component<Props, State> {
  state = {
    openModal: false,
  }

  render() {
    const {
      title,
      onDeletePress,
      values,
      navigation
    } = this.props;
    const {
      openModal,
    } = this.state;

const stringObject = `BEGIN:VCARD
VERSION:3.0
N:${values.name};${values.name}
FN:${values.name}
ORG:${values.company ? values.company : ''}
EMAIL;TYPE=PREF:${values.emailAddress ? values.emailAddress.toLowerCase() : ''}
EMAIL;TYPE=WORK:${values.companyEmail ? values.companyEmail.toLowerCase() : ''}
ROLE:${values.title ? values.title : ''}
TITLE:${values.title ? values.title : ''}
TEL;TYPE=CELL:${values.phoneNumber.toString()}
TEL;TYPE=WORK:${values.workPhone ? values.workPhone.toString() : ''}
ADR;TYPE=HOME:;;${values.address ? values.address : ''};;;;${values.country ? values.country : ''}
END:VCARD`.toString();

  return (
    <View style={styles.Container}>
      <View style={styles.CardContainer}>
        <Text style={styles.Title}>{title.toUpperCase()}</Text>
        <View>
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
              style={[styles.TextDescription, {color: Colors.darkBlue, fontWeight: 'bold'}]}
            >
              {values.description}
            </Text>
            <Text style={styles.TextDescription}>{values.name}</Text>
            <Text style={styles.TextDescription}>{values.phoneNumber}</Text>
            <Text style={styles.TextDescription}>{values.emailAddress && values.emailAddress}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity>
            <Ionicons
              size={35}
              name="ios-search"
              onPress={() => navigation.navigate(MODAL, {stringObject, values})}
              color={Colors.darkBlue}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              size={35}
              name="ios-trash"
              onPress={() => this.setState({openModal: true})}
              color={Colors.darkBlue}
            />
          </TouchableOpacity>
          {openModal && 
            <ModalWarning
              description={`¿Estás seguro que deseas eliminar código QR "${values.name}"?`} 
              handleClose={onDeletePress} 
              closeModal={() => this.setState({openModal: false})}
            />
          }
        </View>
      </View>
    </View>

  )};
};

export default Card;
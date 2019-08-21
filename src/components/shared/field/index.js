// @flow
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Colors from '../../../constants/colors';

type Props = {
  input: string,
  label: string,
  type: string,
  keyboardType: string,
  refField: string,
  onEnter: () => void,
  iconName: string,
  meta: {
    touched: boolean,
    error: string,
    warning: string,
  },
  input: {
    onChange: () => void,
    value: string | number,
  }
}

type StateProps = {
  isFocused: boolean
}

class InputField extends React.Component<Props, StateProps> {
  constructor() {
    super();
    this.state = {
      isFocused: false
    };
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  render() {
    const {
      label,
      type,
      keyboardType,
      refField,
      onEnter,
      iconName,
      meta: {
        touched,
        error,
        warning
      },
      input: {
        onChange,
        value,
      }
    } = this.props;
    const { isFocused } = this.state;
    return (
      <View style={styles.InputContainer}>
        <Text style={[
          styles.Label,
          { fontWeight: isFocused ? 'bold' : 'normal' }
        ]}
        >
          { label }
        </Text>
        <TextInput
          ref={refField}
          onChangeText={onChange}
          onSubmitEditing={onEnter}
          blurOnSubmit={false}
          returnKeyType="next"
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          style={[
            styles.TextInput,
            { borderBottomColor: isFocused ? Colors.blue : Colors.grey }
          ]}
          type={type}
          value={value}
          keyboardType={keyboardType}
        />
        <Ionicons
          color={isFocused ? Colors.blue : Colors.grey}
          style={styles.InputIcon}
          name={iconName}
          size={20}
        />
        {
          touched
          && (<Text style={styles.ErrorMsg}>{error}</Text>
          || <Text style={styles.ErrorMsg}>{warning}</Text>)
        }
      </View>
    );
  }
}

export default InputField;

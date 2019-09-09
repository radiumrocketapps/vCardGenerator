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

  getLineColor = () => {
    const { touched, error, warning } = this.props.meta
    const { isFocused } = this.state;
    let color = Colors.grey
    if (touched && (error || warning)) {
      color = Colors.red
    }
    if (isFocused) {
      color = Colors.blue
    }
    return color
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
      },
      ...rest
    } = this.props;

    const { isFocused } = this.state;
    const fieldColor = this.getLineColor()
    return (
      <View style={styles.InputContainer}>
        <Text style={[
          styles.Label,
          { color: isFocused ? Colors.blue : Colors.grey }
        ]}
        >
          {label}
        </Text>
        <TextInput
          ref={refField}
          onChangeText={onChange}
          onSubmitEditing={onEnter}
          blurOnSubmit={false}
          returnKeyType={refField === 'country' ? 'done' : 'next'}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          style={[
            styles.TextInput,
            { borderBottomColor: fieldColor }
          ]}
          type={type}
          value={value}
          keyboardType={keyboardType}
          {...rest}
        />
        <Ionicons
          color={fieldColor}
          style={styles.InputIcon}
          name={iconName}
          size={20}
        />
        <View style={styles.errorView}>
          {
            touched
            && (<Text style={styles.errorMsg}>{error}</Text>
              || <Text style={styles.errorMsg}>{warning}</Text>)
          }
        </View>
      </View>
    );
  }
}

export default InputField;

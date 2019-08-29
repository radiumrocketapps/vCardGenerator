/* eslint-disable lines-between-class-members */
// @flow
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import type { ReduxProps } from '.'
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../shared/field';
import styles from './styles';

type Props = ReduxProps & FormProps & {}

class Form extends React.Component<Props> {
  required: () => void
  name: Object
  email: Object
  phone: Object
  company: Object
  title: Object
  address: Object
  country: Object
  
  render() {
    const { handleSubmit } = this.props;
    return (
      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={10}
      >
        <View>
          <Field
            label="Description*"
            name="Description"
            component={InputField}
            type="text"
            focus
            forwardRef
            validate={this.required}
            iconName="ios-information-circle"
            onEnter={() => {
              this.name.getRenderedComponent().refs.name.focus();
            }}
            refField="Description"
          />
          <Field
            label="Name*"
            name="Name"
            component={InputField}
            type="text"
            iconName="ios-person"
            forwardRef
            onEnter={() => {
              this.email.getRenderedComponent().refs.email.focus();
            }}
            ref={(ref) => { this.name = ref; }}
            refField="name"
          />
          <Field
            label="Email address"
            name="Email"
            component={InputField}
            type="mail"
            iconName="ios-mail"
            forwardRef
            onEnter={() => {
              this.phone.getRenderedComponent().refs.phone.focus();
            }}
            ref={(ref) => { this.email = ref; }}
            refField="email"
            keyboardType="email-address"
          />
          <Field
            label="Phone number*"
            name="Phone"
            component={InputField}
            type="number"
            iconName="md-phone-portrait"
            forwardRef
            onEnter={() => {
              this.company.getRenderedComponent().refs.company.focus();
            }}
            ref={(ref) => { this.phone = ref; }}
            refField="phone"
            keyboardType="numeric"
          />
          <Field
            label="Company"
            name="Company"
            component={InputField}
            type="text"
            iconName="ios-globe"
            forwardRef
            onEnter={() => {
              this.title.getRenderedComponent().refs.title.focus();
            }}
            ref={(ref) => { this.company = ref; }}
            refField="company"
          />
          <Field
            label="Title"
            name="Title"
            component={InputField}
            type="text"
            iconName="ios-contact"
            forwardRef
            onEnter={() => {
              this.address.getRenderedComponent().refs.address.focus();
            }}
            ref={(ref) => { this.title = ref; }}
            refField="title"
          />
          <Field
            label="Address"
            name="Address"
            component={InputField}
            type="text"
            iconName="ios-information-circle"
            forwardRef
            onEnter={() => {
              this.country.getRenderedComponent().refs.country.focus();
            }}
            ref={(ref) => { this.address = ref; }}
            refField="address"
          />
          <Field
            label="Country"
            name="Country"
            component={InputField}
            type="text"
            iconName="md-locate"
            onEnter={handleSubmit}
            forwardRef
            ref={(ref) => { this.country = ref; }}
            refField="country"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.SubmitButton}
          >
            <Text style={styles.ButtonText}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Form;

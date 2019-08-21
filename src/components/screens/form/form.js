/* eslint-disable lines-between-class-members */
// @flow
import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Field } from 'redux-form';
import type { FormProps } from 'redux-form';
import InputField from '../../shared/field';
import styles from './styles';

class Form extends React.Component<FormProps> {
  name: string;
  email: string;
  company: string;
  tittle: string;
  address: string;
  country: string;

  render() {
    const { handleSubmit } = this.props;
    return (
      <ScrollView>
        <Field
          label="Description"
          name="Description"
          component={InputField}
          type="text"
          focus
          forwardRef
          iconName="ios-information-circle"
          onEnter={() => {
            this.name.getRenderedComponent().refs.name.focus();
          }}
          refField="Description"
        />
        <Field
          label="Name"
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
          label="Phone number"
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
      </ScrollView>
    );
  }
}

export default Form;

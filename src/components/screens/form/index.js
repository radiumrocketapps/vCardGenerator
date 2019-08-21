import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Form from './form';

const submitValues = (formValues) => console.log(formValues);


const validateFields = (values) => {
  const errors = {};
  if (!values.description) {
    errors.Description = 'The field Description is required';
  }
  if (!values.name) {
    errors.Name = 'The field Name is required';
  }
  if (!values.phone) {
    errors.Phone = 'The field Phone is required';
  }
  return errors;
};

export default connect()(reduxForm({
  form: 'vCardForm',
  onSubmit: submitValues,
  validate: validateFields
})(Form));

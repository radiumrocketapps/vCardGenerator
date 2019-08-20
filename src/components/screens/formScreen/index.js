import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import FormScreen from './formScreen';

const submitValues = (formValues) => console.log(formValues);

export default connect()(reduxForm({
  form: 'vCardForm',
  onSubmit: submitValues,
})(FormScreen));

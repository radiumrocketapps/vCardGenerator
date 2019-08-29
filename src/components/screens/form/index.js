// @flow
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HOME } from '../../../navigation/screens';
import Form from './form';
import uuidv1 from 'uuid/v1';
import { createQrCode } from '../../../redux/modules/vCard/actions';

type DispatchProps = {|
  +createQrCode: typeof createQrCode,
|}

const formName = 'qrForm';

const mapDispatchToProps = (dispatch): DispatchProps => bindActionCreators(
  { createQrCode }, dispatch,
)

const onSubmit = (formValues, dispatch, props) => {
  const {
    Description,
    Name,
    Email,
    Phone,
    Company,
    Title,
    Address,
    Country,
  } = formValues
  dispatch(createQrCode({
    id: uuidv1(),
    description: Description,
    name: Name,
    emailAddress: Email,
    phoneNumber: Phone,
    company: Company,
    title: Title,
    address: Address,
    country: Country,
  }))
  props.navigation.navigate(HOME);
}

const validate = (values) => {
  const requiredFields = [
    'Description',
    'Name',
    'Phone',
  ]
  const errors = {};
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = `The field ${field} is required`
    }
  })

  values.Email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email) ?
    errors.Email = 'Invalid mail address' : undefined

  values.Phone && !/^[0-9]+$/.test(values.Phone) ?
    errors.Phone = 'Please enter a number' : undefined

  return errors;
};

const reduxFormConfig = {
  onSubmit,
  validate,
  form: formName,
}

export default connect(
  mapDispatchToProps,
)(reduxForm(reduxFormConfig)(Form))
export type ReduxProps = DispatchProps

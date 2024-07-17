import * as yup from 'yup';

const phoneRegExp = /^\(\d{2}\) \d{5}-\d{4}$/;

export const contactSchema = yup.object().shape({
  name: yup.string(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Please enter a valid number.')
    .required('The phone number field is required.'),
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('The email field is required.'),
  message: yup.string().required('The message field is required.'),
});

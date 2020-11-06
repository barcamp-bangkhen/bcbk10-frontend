import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const userInfoSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    nickname: yup.string().required('Nickname is required'),
    email: yup.string().email('Invalid email address').required('Email address is required'),
    phoneNumber: yup.string().required('Phone number is required').matches(phoneRegExp, 'Invalid phone number'),
    conDisease: yup.string(),
    allergicFood: yup.string(),
})

export default userInfoSchema

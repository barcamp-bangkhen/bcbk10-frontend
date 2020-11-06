import * as yup from "yup";

const eventInfoSchema = yup.object().shape({
    interestedTopic: yup.string().required('Interested topic is required'),
    shirt: yup.string().required('You must choose the option'),
    shirtSize: yup.string().required('Shirt size is required')
})

export default eventInfoSchema

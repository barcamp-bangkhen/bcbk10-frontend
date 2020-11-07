import * as yup from "yup";

const eventInfoSchema = yup.object().shape({
    interestedTopic: yup.string().required('Interested topic is required'),
    shirt: yup.string(),
    shirtSize: yup.string()
})

export default eventInfoSchema

import * as yup from 'yup'

const eventInfoSchema = yup.object().shape({
	shirt: yup.string(),
	shirtSize: yup.string(),
})

export default eventInfoSchema

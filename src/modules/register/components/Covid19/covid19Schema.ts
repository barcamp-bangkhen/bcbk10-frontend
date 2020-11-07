import * as yup from 'yup'

const covid19Schema = yup.object().shape({
	covidQ1: yup.string().required(),
	covidQ2: yup.string().required(),
	covidQ3: yup.string().required(),
	covidQ4: yup.string().required(),
	covidQ5: yup.string().required(),
	covidQ6: yup.string().required(),
	covidQ7: yup.string().required(),
	covidQ8: yup.string().required(),
})

export default covid19Schema

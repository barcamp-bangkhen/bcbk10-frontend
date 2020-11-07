import * as yup from 'yup'

const covid19Schema = yup.object().shape({
	covidQ1: yup.string(),
	covidQ2: yup.string(),
	covidQ3: yup.string(),
	covidQ4: yup.string(),
	covidQ5: yup.string(),
	covidQ6: yup.string(),
	covidQ7: yup.string(),
	covidQ8: yup.string(),
})

export default covid19Schema

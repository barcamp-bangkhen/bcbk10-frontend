import React, { useState, createContext } from 'react'

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({
		firstName: undefined,
		lastName: undefined,
		nickname: undefined,
		email: undefined,
		phoneNumber: undefined,
		conDisease: undefined,
		allergicFood: undefined,
	})
	const [covid19Info, setCovid19Info] = useState({
		covidQ1: undefined,
		covidQ2: undefined,
		covidQ3: undefined,
		covidQ4: undefined,
		covidQ5: undefined,
		covidQ6: undefined,
		covidQ7: undefined,
		covidQ8: undefined,
	})
	const [eventInfo, setEventInfo] = useState({
		interestedTopic: undefined,
		shirt: undefined,
		shirtSize: undefined,
	})

	const store = {
		userInfo: [userInfo, setUserInfo],
		covid19Info: [covid19Info, setCovid19Info],
		eventInfo: [eventInfo, setEventInfo],
	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

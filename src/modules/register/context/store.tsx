import React, { useState, createContext } from 'react'

export const StoreContext = createContext({})

export const StoreContextProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState({})
	const [covid19Info, setCovid19Info] = useState({})
	const [eventInfo, setEventInfo] = useState({})

	const store = {
		userInfo: [userInfo, setUserInfo],
		covid19Info: [covid19Info, setCovid19Info],
		eventInfo: [eventInfo, setEventInfo],
	}

	return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

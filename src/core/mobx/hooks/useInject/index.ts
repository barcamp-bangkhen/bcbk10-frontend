import { useContext, Context } from 'react'
import { useObserver, MobXProviderContext } from 'mobx-react'

function useInject<Stores, Output>(dataSelector: (stores: Stores) => Output) {
	return useObserver(() =>
		dataSelector(useContext(MobXProviderContext as Context<Stores>)),
	)
}

export default useInject

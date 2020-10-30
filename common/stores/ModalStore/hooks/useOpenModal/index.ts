import useInject from 'common/hooks/useInject'
import ModalStore from 'common/stores/ModalStore'

interface Stores {
	[key: string]: ModalStore
}

export default function useOpenModal(storeName: string) {
	return useInject((stores: Stores) => ({
		open: stores[storeName].open,
	}))
}

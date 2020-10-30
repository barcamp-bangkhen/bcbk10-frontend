import useInject from 'common/hooks/useInject'
import ModalStore from 'common/stores/ModalStore'

interface Stores {
	[key: string]: ModalStore
}

export default function useCloseModal(storeName: string) {
	return useInject((stores: Stores) => ({
		isOpen: stores[storeName].isOpen,
		close: stores[storeName].close,
	}))
}

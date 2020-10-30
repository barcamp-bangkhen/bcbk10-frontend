import FetchStateStore from 'core/store/stores/FetchStateStore'
import { observable, action } from 'mobx'

class ModalStore extends FetchStateStore {
  @observable
  isOpen: boolean

  @observable
  data: any

  constructor() {
    super()
    this.isOpen = false
  }

  @action.bound
  open(data?: any) {
    if (data) {
      this.data = data
    }

    this.isOpen = true
  }

  @action.bound
  close(data?: any) {
    this.data = data || undefined
    this.isOpen = false
  }
}

export default ModalStore

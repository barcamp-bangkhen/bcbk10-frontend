import FetchStateStore from 'common/stores/FetchStateStore'
import { action, computed } from 'mobx'
import { get } from 'lodash'

class NotFoundableFetchStateStore extends FetchStateStore {
  @action
  async fetch(fetchPromise: Promise<any>) {
    try {
      const result = await super.fetch(fetchPromise)
      return result
    } catch (e) {
      if (!this.notFound) {
        throw e
      }
    }
  }

  @computed
  get notFound() {
    return get(this.error, ['response', 'status']) === 404
  }
}

export default NotFoundableFetchStateStore

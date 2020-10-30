import { renderHookWithMobxStore } from '@wongnai/gordon-ramsay.js'
import useInject from 'core/mobx/hooks/useInject'

describe('core/mobx/hooks/useInject', () => {
	it('should get data from stores correctly', () => {
		class MockStore {
			data = 'test'
		}

		const mockStore = new MockStore()

		const { result } = renderHookWithMobxStore(
			() =>
				useInject(({ mockStore }: { mockStore: MockStore }) => ({
					data: mockStore.data,
				})),
			{ mockStore },
		)

		expect(result.current).toEqual({
			data: 'test',
		})
	})
})

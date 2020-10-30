import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import FetchStateStore, { FETCH_STATE } from '.'

describe('FetchStateStore', () => {
	const mock = new MockAdapter(axios)
	beforeEach(() => {
		mock.onGet('/ok').reply(200, {
			data: 'ok',
		})
		mock.onGet('/error').reply(500)
	})

	it('should initial FetchState without modification', () => {
		const fetchStateStore = new FetchStateStore()
		expect(fetchStateStore.error).toBeFalsy()
		expect(fetchStateStore.loading).toBeFalsy()
		expect(fetchStateStore.option).toEqual({
			throwException: true,
		})
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.idle)
	})

	it('should initial FetchState with throw exception true', () => {
		const fetchStateStore = new FetchStateStore({
			throwException: true,
		})
		expect(fetchStateStore.error).toBeFalsy()
		expect(fetchStateStore.loading).toBeFalsy()
		expect(fetchStateStore.option).toEqual({
			throwException: true,
		})
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.idle)
	})

	it('should initial FetchState with throw exception false', () => {
		const fetchStateStore = new FetchStateStore({
			throwException: false,
		})
		expect(fetchStateStore.error).toBeFalsy()
		expect(fetchStateStore.loading).toBeFalsy()
		expect(fetchStateStore.option).toEqual({
			throwException: false,
		})
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.idle)
	})

	it('should set loading as true while fetch is not finish', () => {
		const fetchStateStore = new FetchStateStore()
		fetchStateStore.fetch(axios.get('/ok'))
		expect(fetchStateStore.loading).toBeTruthy()
		expect(fetchStateStore.error).toBeFalsy()
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.loading)
	})

	it('should fetch success with correct data', async () => {
		const fetchStateStore = new FetchStateStore()
		const response = await fetchStateStore.fetch(axios.get('/ok'))
		expect(fetchStateStore.loading).toBeFalsy()
		expect(fetchStateStore.error).toBeFalsy()
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.fetched)
		expect(response.data.data).toEqual('ok')
	})

	it('should throw error if throwException is set as true (default value)', async () => {
		const fetchStateStore = new FetchStateStore()
		try {
			await fetchStateStore.fetch(axios.get('/error'))
		} catch (e) {
			expect(fetchStateStore.loading).toBeFalsy()
			expect(fetchStateStore.error).toEqual(e)
			expect(fetchStateStore.fetchState).toBe(FETCH_STATE.error)
		}
	})

	it("shouldn't throw error if throwException is set as false", async () => {
		const fetchStateStore = new FetchStateStore({
			throwException: false,
		})
		await fetchStateStore.fetch(axios.get('/error'))
		expect(fetchStateStore.loading).toBeFalsy()
		expect(fetchStateStore.error).toBeDefined()
		expect(fetchStateStore.fetchState).toBe(FETCH_STATE.error)
	})

	it('should perform side-effect after loading', async () => {
		const fetchStateStore = new FetchStateStore()
		let flag = false
		await fetchStateStore.fetch(axios.get('/ok'))
		fetchStateStore.performIfNotLoading(() => {
			flag = true
		})
		expect(fetchStateStore.loading).toBeFalsy()
		expect(flag).toBeTruthy()
	})
})

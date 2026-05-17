import { http, HttpResponse } from '@aamini/config/msw'

export default [
	http.get('*', () => {
		return HttpResponse.json({})
	}),
] as const

import { axiosClassic } from '@/api/interceptors'

import { TAuthForm, TAuthResponse } from '../types/auth.types'

import {
	removeFromStorage,
	saveTokenStorage,
} from '@/services/auth-token.service'

export const authService = {
	async main(type: 'login' | 'register', data: TAuthForm) {
		const response = await axiosClassic.post<TAuthResponse>(
			`/auth/${type}`,
			data
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	},

	async getNewTokens() {
		const response = await axiosClassic.post<TAuthResponse>(
			'/auth/login/access-token'
		)

		if (response.data.accessToken) {
			saveTokenStorage(response.data.accessToken)
		}

		return response
	},
	async logout() {
		const response = await axiosClassic.post<boolean>('/auth/logout')

		if (response.data) {
			removeFromStorage()
		}

		return response
	},
}

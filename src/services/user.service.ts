import { TUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

export type TProfileResponse = {
	user: TUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	private BASE_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<TProfileResponse>(this.BASE_URL)

		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put<TProfileResponse>(
			this.BASE_URL,
			data
		)

		return response.data
	}
}

export const userService = new UserService()

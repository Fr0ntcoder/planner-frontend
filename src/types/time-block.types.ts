import { TBase } from '@/types/root.types'

export type TTimeBlockResponse = {
	name: string
	color?: string
	duration: number
	order: number
} & TBase

export type TypeTimeBlockFormState = Partial<
	Omit<TTimeBlockResponse, 'createdAt' | 'updatedAt'>
>

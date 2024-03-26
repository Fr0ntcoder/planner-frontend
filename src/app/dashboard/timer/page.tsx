import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Timer } from './Timer'

export const metadata: Metadata = {
	title: 'Таймер',
	...NO_INDEX_PAGE,
}
export default function TimerPage() {
	return <Timer />
}

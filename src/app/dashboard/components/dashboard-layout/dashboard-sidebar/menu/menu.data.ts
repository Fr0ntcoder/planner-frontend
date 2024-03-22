import {
	CalendarRange,
	KanbanSquare,
	LayoutDashboard,
	LucideIcon,
	Settings,
	Timer,
} from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

export type TMunuItem = {
	link: string
	name: string
	icon: LucideIcon
}

export const MENU: TMunuItem[] = [
	{
		link: DASHBOARD_PAGES.HOME,
		name: 'Панель задач',
		icon: LayoutDashboard,
	},
	{
		link: DASHBOARD_PAGES.TASKS,
		name: 'Задачи',
		icon: KanbanSquare,
	},
	{
		link: DASHBOARD_PAGES.TIMER,
		name: 'Таймер',
		icon: Timer,
	},
	{
		link: DASHBOARD_PAGES.TIME_BLOCKING,
		name: 'Управление временем',
		icon: CalendarRange,
	},
	{
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Настройки',
		icon: Settings,
	},
]

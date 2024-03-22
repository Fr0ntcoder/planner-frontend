import dayjs, { type Dayjs } from 'dayjs'
import 'dayjs/locale/ru'
import isoWeek from 'dayjs/plugin/isoWeek'
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

export const FILTERS: Record<string, Dayjs> = {
	today: dayjs().startOf('day'),
	tomorrow: dayjs().add(1, 'day').startOf('day'),
	'on-this-week': dayjs().endOf('isoWeek'),
	'on-next-week': dayjs().add(1, 'week').startOf('day'),
	l: dayjs().add(2, 'week').startOf('day'),
}

export const COLUMNS = [
	{
		label: 'Сегодня',
		value: 'today',
	},
	{
		label: 'Завтра',
		value: 'tomorrow',
	},
	{
		label: 'На этой недели',
		value: 'on-this-week',
	},
	{
		label: 'На следующей недели',
		value: 'on-next-week',
	},
	{
		label: 'Последний',
		value: 'later',
	},
	{
		label: 'Завершено',
		value: 'completed',
	},
]

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOuside'

import styles from './DatePicker.module.scss'
import { formatCaption } from './DatePickerCaption'

dayjs.extend(LocalizedFormat)

type TDatePicker = {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}
export function DatePicker({ onChange, value, position }: TDatePicker) {
	const [selected, setSelected] = useState<Date>()
	const { isShow, setIsShow, ref } = useOutside(false)
	const handleDaySelect: SelectSingleEventHandler = (date) => {
		const ISOdate = date?.toISOString()

		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}
	return (
		<div className={styles.wrap} ref={ref}>
			<button onClick={() => setIsShow(!isShow)} className={styles.date}>
				{value ? dayjs(value).format('LL') : 'Нажмите на select'}
			</button>
			{value && (
				<button className={styles.btn} onClick={() => onChange('')}>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div className={styles.picker}>
					<DayPicker
						fromYear={2023}
						toYear={2054}
						initialFocus={isShow}
						mode="single"
						defaultMonth={selected}
						selected={selected}
						onSelect={handleDaySelect}
						weekStartsOn={1}
						formatters={{ formatCaption }}
					/>
				</div>
			)}
		</div>
	)
}

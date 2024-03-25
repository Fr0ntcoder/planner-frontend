import { X } from 'lucide-react'

import { Badge } from '@/components/ui/badge/Badge'

import { useOutside } from '@/hooks/useOuside'

import styles from './SingleSelect.module.scss'

export type TOption = {
	label: string
	value: string
}

type TSingleSelect = {
	data: TOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect,
}: TSingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find((item) => item.value === value)?.value
	return (
		<div className={styles.select} ref={ref}>
			<button
				onClick={(e) => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
			>
				{getValue() ? (
					<Badge variant="default">{getValue()}</Badge>
				) : (
					<Badge variant="default">Выберите</Badge>
				)}
			</button>
			{value && (
				<button
					className={styles.btn}
					onClick={(e) => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
			{isShow && (
				<div className={styles.drop}>
					{data.map((item) => (
						<button
							key={item.value}
							onClick={(e) => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
							className=""
						>
							<Badge variant={item.label}>{item.label}</Badge>
						</button>
					))}
				</div>
			)}
		</div>
	)
}

import { Check } from 'lucide-react'

import styles from './Checkbox.module.scss'

const Checkbox = (props: { id?: string; extra?: string; [x: string]: any }) => {
	const { extra, color, id, ...rest } = props
	return (
		<label htmlFor={id} className={styles.checkbox}>
			<input
				id={id}
				type="checkbox"
				name="weekly"
				{...rest}
				className={styles.hidden}
			/>
			<span className={styles.icon}>
				<Check />
			</span>
		</label>
	)
}

export default Checkbox

import clsx from 'clsx'
import { ChangeEventHandler, forwardRef } from 'react'

import styles from './Field.module.scss'

interface InputFieldProps {
	id: string
	label: string
	extra?: string
	placeholder: string
	variant?: string
	state?: 'error' | 'success'
	disabled?: boolean
	type?: string
	isNumber?: boolean
	onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = forwardRef<HTMLInputElement, InputFieldProps>(
	(
		{ label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
		ref
	) => {
		return (
			<div className={`${extra}`}>
				<label htmlFor={id} className={styles.label}>
					{label}
				</label>
				<input
					ref={ref}
					disabled={disabled}
					type={type}
					id={id}
					placeholder={placeholder}
					className={clsx(styles.input, {
						[styles.disabled]: disabled === true,
						[styles.error]: state === 'error',
						[styles.success]: state === 'success',
					})}
					onKeyDown={(event) => {
						if (
							isNumber &&
							!/[0-9]/.test(event.key) &&
							event.key !== 'Backspace' &&
							event.key !== 'Tab' &&
							event.key !== 'Enter' &&
							event.key !== 'ArrowLeft' &&
							event.key !== 'ArrowRight'
						) {
							event.preventDefault()
						}
					}}
					{...rest}
				/>
			</div>
		)
	}
)

Input.displayName = 'input'

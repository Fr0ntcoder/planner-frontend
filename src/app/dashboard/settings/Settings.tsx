'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/input/Field'
import { Heading } from '@/components/ui/heading/Heading'

import { TypeUserForm } from '@/types/auth.types'

import { useProfile } from '@/hooks/useProfile'

import styles from './Settings.module.scss'
import { useInitialData } from '@/app/dashboard/settings/hooks/useInitialData'
import { useUpdateSettings } from '@/app/dashboard/settings/hooks/useUpdateSettings'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange',
	})
	const { data } = useProfile()

	console.log(data)
	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = (data) => {
		const { password, ...rest } = data
		mutate({
			...rest,
			password: password || undefined,
		})
	}
	return (
		<div className={styles.settings}>
			<Heading title="Настройки" className={styles.title} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.wrap}>
					<div className={styles.left}>
						<Field
							type="email"
							id="email"
							label="Email"
							placeholder="Введите email"
							{...register('email', { required: 'Неверный email' })}
						/>
						<Field
							id="name"
							label="Имя"
							placeholder="Введите имя"
							{...register('name')}
						/>
						<Field
							type="password"
							{...register('password')}
							id="password"
							label="Пароль"
							placeholder="Введите пароль"
							className={styles.input}
						/>
					</div>
					<div className={styles.right}>
						<Field
							isNumber
							{...register('workInterval', {
								valueAsNumber: true,
							})}
							id="workInterval"
							label="Интервал работы (мин.):"
							placeholder="Введите Интервал работы (мин.):"
							className={styles.input}
						/>
						<Field
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true,
							})}
							id="breakInterval"
							label="Интервал перерыва (мин.):"
							placeholder="Введите интервал перерыва (мин.):"
							className={styles.input}
						/>
						<Field
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true,
							})}
							id="intervalCount"
							label="Рабочий интервал (мин.):"
							placeholder="Введите рабочий интервал (мин.):"
							className={styles.input}
						/>
					</div>
				</div>
				<Button type="submit" disabled={isPending} className={styles.btn}>
					Сохранить
				</Button>
			</form>
		</div>
	)
}

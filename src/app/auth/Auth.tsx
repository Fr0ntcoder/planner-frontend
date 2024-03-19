'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/input/Input'
import { Heading } from '@/components/ui/heading/Heading'

import { TAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

import styles from './Auth.module.scss'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<TAuthForm>({
		mode: 'onChange',
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: TAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Вы успешно вошли!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		},
	})

	const onSubmit: SubmitHandler<TAuthForm> = (data) => {
		mutate(data)
	}

	return (
		<div className={styles.root}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Heading title="Авторизация" className={styles.heading} />
				<Field
					type="email"
					{...register('email', { required: 'Неверный email' })}
					id="email"
					label="Email"
					placeholder="Введите email"
					className={styles.input}
				/>
				<Field
					type="password"
					{...register('password', { required: 'Неверный пароль' })}
					id="password"
					label="Пароль"
					placeholder="Введите пароль"
					className={styles.input}
				/>
				<div className={styles.btns}>
					<Button className={styles.btn} onClick={() => setIsLoginForm(true)}>
						Войти
					</Button>
					<Button className={styles.btn} onClick={() => setIsLoginForm(false)}>
						Зарегистрироваться
					</Button>
				</div>
			</form>
		</div>
	)
}

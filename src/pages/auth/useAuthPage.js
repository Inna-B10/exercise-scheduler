import { useEffect, useMemo, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import AuthService from '../../services/auth.service'

const useAuthPage = () => {
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({ mode: 'onChange' })

	const { isAuth, setIsAuth } = useAuth()
	const navigate = useNavigate()

	const { mutate, isLoading, error, isError } = useMutation({
		mutationKey: ['auth'],
		mutationFn: ({ email, password }) =>
			AuthService.main(email, password, type),
		onSuccess: () => {
			setIsAuth(true)
			reset()
		}
	})
	useEffect(() => {
		if (isAuth) {
			navigate('/')
		}
	}, [isAuth])

	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			setType,
			register,
			handleSubmit,
			errors,
			isLoading,
			onSubmit,
			error: isError ? error : null //pass on error.message
		}),
		[error, errors, isLoading]
	)
}

export default useAuthPage

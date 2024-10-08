import { useQuery } from '@tanstack/react-query'
import UserService from '../../services/user.service'

const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		onError: error => {
			console.error('Error fetching profile:', error)
		}
	})
}

export default useProfile

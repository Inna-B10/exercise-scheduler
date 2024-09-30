import { useQuery } from '@tanstack/react-query'
import UserService from '../../services/user.service'

const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data
	})
}

export default useProfile

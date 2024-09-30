import { useQuery } from '@tanstack/react-query'
import userService from '../../services/user.service'

const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: () => userService(),
		select: ({ data }) => data
	})
}

export default useProfile

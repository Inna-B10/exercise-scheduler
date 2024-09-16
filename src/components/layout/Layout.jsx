import Header from './header/Header'

const layout = ({ children }) => {
	return (
		<div>
			<Header backLink='/' />
			{children}
		</div>
	)
}

export default layout

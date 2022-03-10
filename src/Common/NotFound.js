import React from 'react';

function NotFound() {
	return (
		<>
			<span className='sr-only'>Not Found</span>
			<h1>Page Not Found</h1>
			<img className='img-fluid w-50' alt='Page not found' src='/img/not-found.svg' />
		</>
	);
}

export default NotFound;

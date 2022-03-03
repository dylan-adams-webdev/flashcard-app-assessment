import React from 'react';

function NotFound() {
	return (
		<div className='text-center'>
			<h1 className='mb-5'>Page Not Found</h1>
			<img
				className='img-fluid w-75'
				src='/img/not-found.svg'
				alt='page not found'
			/>
		</div>
	);
}

export default NotFound;

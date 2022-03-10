import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<>
			<span className='sr-only'>Not Found</span>
			<h1>We can't find that page...</h1>
			<div className='d-flex'>
				<Link className='btn btn-primary' to={'/'}>
					<i className='fa-solid fa-home'></i> &nbsp; Home
				</Link>
				</div>
				<img
					className='img-fluid w-75 mt-3'
					alt='Page not found'
					src='/img/not-found.svg' />
			
		</>
	);
}

export default NotFound;

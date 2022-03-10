import React from 'react';
import { Link } from 'react-router-dom';

export default function GenericError({ msg }) {
	return (
		<>
			<div>
				<h1 className='mb-3'>{msg}</h1>
				<Link to={'/'} className='btn btn-primary mr-2'>
					<i className='fa-solid fa-home'></i>&nbsp; Home
				</Link>
				<img
					className='img-fluid w-75 d-block mt-5'
					src='/img/error.svg'
					alt='There was an error'
				/>
			</div>
		</>
	);
}

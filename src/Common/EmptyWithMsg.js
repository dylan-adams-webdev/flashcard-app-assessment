import React from 'react';

export default function EmptyWithMsg({ msg }) {
	return (
		<>
			<div className='text-center'>
				<h1 className='mb-5'>{msg}</h1>
				<img
					className='img-fluid w-75'
					src='/img/not-found.svg'
					alt='page not found'
				/>
			</div>
		</>
	);
}

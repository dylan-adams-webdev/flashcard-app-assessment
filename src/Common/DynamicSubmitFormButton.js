import React from 'react';

export default function DynamicDeckFormButton({ isSubmitting }) {
	return (
		<button type='submit' className='btn btn-primary'>
			{isSubmitting ? (
				<>
					<span
						className='spinner-border spinner-border-sm'
						role='status'
						aria-hidden='true'
					></span>
					&nbsp; loading...
				</>
			) : (
				'Submit'
			)}
		</button>
	);
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicDeckFormButton from './DynamicDeckFormButton';

export default function DeckForm({
	submitHandler,
	initialState = { name: '', description: '' },
}) {
	const [formData, setFormData] = useState({ ...initialState });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const changeHandler = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};

	const onSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		submitHandler(formData);
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='form-group'>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					name='name'
					className='form-control'
					id='name'
					placeholder='Deck Name'
					onChange={changeHandler}
					value={formData.name}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='description'>Description</label>
				<textarea
					name='description'
					className='form-control'
					id='description'
					placeholder='Brief description of the deck'
					onChange={changeHandler}
					value={formData.description}
					required
				/>
			</div>
			<Link to={'/'} className='btn btn-secondary mr-2'>
				Cancel
			</Link>
			<DynamicDeckFormButton isSubmitting={isSubmitting} />
		</form>
	);
}

import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DynamicDeckFormButton from '../../Common/DynamicSubmitFormButton';

export default function CardForm(props) {
	const {
		initialState = { front: '', back: '' },
		submitHandler
	} = props;

	const [formData, setFormData] = useState({ ...initialState });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const params = useParams();

	const changeHandler = ({ target }) => {
		setFormData({ ...formData, [target.name]: target.value });
	};
	
	// only to be used as callback for new card page onSubmit
	const resetForm = () => {
		setFormData({front: '', back:''});
		setIsSubmitting(false);
	}

	const onSubmit = (event) => {
		event.preventDefault();
		setIsSubmitting(true);
		submitHandler(formData, resetForm);
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='form-group'>
				<label htmlFor='front'>Front</label>
				<input
					type='text'
					name='front'
					className='form-control'
					id='front'
					placeholder='Front side of card'
					onChange={changeHandler}
					value={formData.front}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='back'>Back</label>
				<textarea
					name='back'
					className='form-control'
					id='back'
					placeholder='Back side of card'
					onChange={changeHandler}
					value={formData.back}
					required
				/>
			</div>
			<Link
				to={`/decks/${params.deckId}`}
				className='btn btn-secondary mr-2'
			>
				{formData.front !== '' || formData.back !== ''
					? 'Cancel'
					: 'Done Adding Cards'}
			</Link>
			<DynamicDeckFormButton isSubmitting={isSubmitting} />
		</form>
	);
}

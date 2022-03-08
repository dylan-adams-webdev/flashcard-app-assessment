import React from 'react';
import StudyCardGroupItem from './StudyCardGroupItem';

export default function StudyCardGroup({ cards, handleDeleteCard }) {
	const cardElements = cards.map((card) => (
		<StudyCardGroupItem
			key={card.id}
			card={card}
			handleDeleteCard={handleDeleteCard}
		/>
	));

	return (
		<>
			<div className='row row-cols-1 row-cols-md-2'>
				{cardElements.length ? cardElements : null}
			</div>
		</>
	);
}

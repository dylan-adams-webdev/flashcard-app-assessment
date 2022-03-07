import React from 'react';
import StudyCardGroupItem from './StudyCardGroupItem';
import NoCards from './NoCards';

export default function StudyCardGroup({ cards }) {
	console.log(cards);
	const cardElements = cards.map(card => (
		<StudyCardGroupItem card={card} />
	));
	
	return (
		<>
			<div className='row row-cols-1 row-cols-md-2'>
				{cardElements.length ? cardElements : null}
			</div>
		</>
	);
}

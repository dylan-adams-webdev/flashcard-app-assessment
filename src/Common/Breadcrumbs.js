import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ links }) {
	const elements = links.map((el, index) => (
		<li key={index}
			className={`breadcrumb-item ${
				links.length - 1 === index ? 'active' : ''
			}`}
		>
			{links.length - 1 === index ? (
				el.name
			) : (
				<Link to={el.address}>{el.name}</Link>
			)}
		</li>
	));
	return (
		<nav aria-label='breadcrumb'>
			<ol className='breadcrumb'>
				<li className='breadcrumb-item'>
					<Link to={'/'}>
						<i className='fa-solid fa-home'></i>&nbsp; Home
					</Link>
				</li>
				{elements}
			</ol>
		</nav>
	);
}

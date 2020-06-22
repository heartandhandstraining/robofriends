import React from 'react';

const Card = ({ name, email, id }) => {
	return (
	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
		<img alt='robot friend' src={`https://robohash.org/${id}?200X200`} />
		<div>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	</div>
	);
}

export default Card;
import React from 'react';
import './Notifications.css';
import {getLatestNotification} from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

const Notifications = () => (
	<div className='Notifications'>
		<p>Here is the list of notifications</p>
		<button
			style={{
				position: 'absolute',
				top: '12px',
				right: '12px',
				border: 'none',
				background: 'none',
				padding: '0',
			}}
		>
			<img
				src={closeIcon}
				onClick={() => console.log('Close button has been clicked')}
				alt='close icon'
				className='close-icon'
			></img>
		</button>
		<ul>
			<li data-priority='default'>New course available</li>
			<li data-priority='urgent'>New resume available</li>
			<li
				data-priority='urgent'
				dangerouslySetInnerHTML={{__html: getLatestNotification()}}
			></li>
		</ul>
	</div>
);

export default Notifications;

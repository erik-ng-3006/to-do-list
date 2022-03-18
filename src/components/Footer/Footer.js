import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<p>
				created by
				<a
					href='https://github.com/erik-ng-3006'
					target='_blank'
					rel='noreferrer'
				>
					{' erik-ng '}
				</a>
				- devChallenges.io
			</p>
		</footer>
	);
};

export default Footer;

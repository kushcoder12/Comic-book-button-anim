import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { buttonAnim, clickAnim } from './Button.anim';
import style from './Button.module.css';

const randomNo = (min, max) => {
	return min + Math.floor(Math.random() * (max - min));
};

export default function Button({ buttonName, hoverBtnName }) {
	const [btnName, setBtnName] = useState(buttonName);

	return (
		<div className={style.buttonContainer}>
			<motion.button
				type='button'
				className={style.btn}
				initial='init'
				animate='init'
				whileHover='hover'
				whileTap='tap'
				variants={buttonAnim}
				custom={randomNo(6, 12)}
				onMouseEnter={() => setBtnName(hoverBtnName)}
				onMouseLeave={() => setBtnName(buttonName)}
			>
				{btnName}
				<motion.div className={style.click} variants={clickAnim} custom={randomNo(-50, 50)}></motion.div>
			</motion.button>
		</div>
	);
}

Button.defaultProps = {
	buttonName: 'BUTTON',
	hoverBtnName: 'HOVER',
};

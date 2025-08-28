"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type VolItemProps = {
	name: string;
	description: string;
};

export const VolItem = (props: VolItemProps) => {
	const ctrls = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		} else {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	const listAnimation = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<motion.li
			ref={ref}
			className="group py-1.5"
			animate={ctrls}
			variants={listAnimation}
			initial="hidden"
		>
			<div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded px-3 py-4 w-full">
				<p className="font-semibold text-neutral-900 dark:text-neutral-100">
					{props.name}
				</p>
				<p className="text-neutral-700 dark:text-neutral-300 mt-1">
					{props.description}
				</p>
			</div>
		</motion.li>
	);
};

export default VolItem;

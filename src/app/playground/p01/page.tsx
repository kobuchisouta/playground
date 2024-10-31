"use client";
import { useState } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function P01() {
	const [num, setNum] = useState(0);

	return (
		<main>
			<p>{num}</p>
			<button type="button" onClick={() => {
				setNum((prev) => prev + 1);
			}}>+</button>
			<Link href="/html/playground/p01/index.html"><p>HTMLへ</p></Link>
		</main>
	);
}

import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
const Articles = () => {
	const { themeColor } = useContext(ThemeContext)
	return (
		<section className={`articles ${themeColor}`}>
			<article>
				<h3>My first website</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
					eligendi dignissimos sit impedit veniam quod tempore suscipit error
					cum quos.
				</p>
			</article>
			<article>
				<h3>My first assessment</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
					iure nam sequi veritatis dolore reprehenderit voluptatibus expedita
					fugit. Neque, nesciunt.
				</p>
			</article>
			<article>
				<h3>My first bootcamp</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
					doloremque atque consequatur eos quia saepe illo veritatis iusto quam
					adipisci!
				</p>
			</article>
		</section>
	)
}

export default Articles

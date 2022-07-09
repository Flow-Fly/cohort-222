import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"

const Profile = () => {
	const { themeColor } = useContext(ThemeContext)
	return (
		<article className={"Profile " + themeColor}>
			<img
				alt="avatar"
				src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFroBand&accessoriesType=Blank&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=PastelOrange&eyeType=Wink&eyebrowType=UnibrowNatural&mouthType=Concerned&skinColor=DarkBrown"
			/>

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
				consectetur quas error incidunt natus ducimus numquam nulla. Repellat
				consequuntur est ex vel odit, minus et excepturi at itaque fugit vitae?
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
				consectetur quas error incidunt natus ducimus numquam nulla. Repellat
				consequuntur est ex vel odit, minus et excepturi at itaque fugit vitae?
			</p>
		</article>
	)
}

export default Profile

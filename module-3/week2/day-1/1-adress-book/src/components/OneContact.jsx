import React from "react"

const OneContact = ({ contact, handleDeleteContact }) => {
	return (
		<p key={contact.email}>
			<span className="name">{contact.name}</span>
			<span className="email">{contact.email}</span>
			<span className="phone">{contact.phone}</span>
			<span
				className="delete"
				onClick={() => handleDeleteContact(contact.email)}>
				🗑️
			</span>
		</p>
	)
}

export default OneContact

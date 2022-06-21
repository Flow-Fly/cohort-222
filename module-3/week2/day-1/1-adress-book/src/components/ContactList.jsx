import React from "react"
import OneContact from "./OneContact"
const ContactList = ({ contacts, handleDeleteContact }) => {
	return (
		<div className="contact-list">
			{contacts.map((contact) => {
				return (
					<OneContact
						key={contact.email}
						contact={contact}
						handleDeleteContact={handleDeleteContact}
					/>
				)
			})}
		</div>
	)
}

export default ContactList

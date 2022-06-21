import "./App.css"
import { useState } from "react"
import ContactList from "./components/ContactList"
import Form from "./components/Form"
import Search from "./components/Search"
const baseContact = [
	{
		name: "Bob",
		email: "bob@email.com",
		phone: 121548585,
	},
	{
		name: "Susan",
		email: "susan@email.com",
		phone: 121238585,
	},
	{
		name: "Alice",
		email: "alice@email.com",
		phone: 121544685,
	},
]

function App() {
	const [contacts, setContacts] = useState(baseContact)
	const [searchedString, setSearchedString] = useState("")

	const handleDeleteContact = (email) => {
		const contactsToKeep = contacts.filter((contact) => contact.email !== email)
		setContacts(contactsToKeep)
	}
	const handleAddContact = (contact) => {
		setContacts([...contacts, contact])
	}

	let searchedContacts = null
	// if (searchedString !== "") {
	// 	searchedContacts = contacts.filter((contact) => {
	// 		return contact.name.toLowerCase().includes(searchedString.toLowerCase())
	// 	})
	// } else {
	// 	searchedContacts = contacts
	// }

	searchedString !== ""
		? (searchedContacts = contacts.filter((contact) => {
				return contact.name.toLowerCase().includes(searchedString.toLowerCase())
		  }))
		: (searchedContacts = contacts)

	return (
		<div className="App">
			<div className="content">
				<Form handleAddContact={handleAddContact} />
				<hr />

				<Search
					searchedString={searchedString}
					setSearchedString={setSearchedString}
				/>
				<hr />
				<ContactList
					contacts={searchedContacts}
					handleDeleteContact={handleDeleteContact}
				/>
			</div>
		</div>
	)
}

export default App

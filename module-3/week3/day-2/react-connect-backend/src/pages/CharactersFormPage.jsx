import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CharactersFormPage() {
  const navigate = useNavigate();
  const [ values, setValues ] = useState({
    name: "",
    weapon: "",
    debt: "",
    occupation: ""
  })

  const handleChange = (e) => {
    // setValues(({ ...values, [e.target.name]: e.target.value }))
    const { name, value } = e.target;
    setValues(({ ...values, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://ih-crud-api.herokuapp.com/characters", values);
      setValues({
        name: "",
        weapon: "",
        debt: "",
        occupation: ""
      })
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  } 
  return (
    <div>
      <h1>Create character</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={handleChange} type="text" name="name" value={values.name} />
        </div>
        <div>
          <label htmlFor="weapon">Weapon:</label>
          <input onChange={handleChange} type="text" name="weapon" value={values.weapon} />
        </div>
        <div>
          <label htmlFor="occupation">Occupation:</label>
          <input onChange={handleChange} type="text" name="occupation" value={values.occupation}/>
        </div>
        <div>
          <label htmlFor="debt">Debt:</label>
          <input onChange={handleChange} type="text" name="debt" value={values.debt}/>
        </div>

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

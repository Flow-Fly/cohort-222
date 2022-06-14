import logo from './logo.svg'

function Student(){
  const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)
  }
  const student = {
    firstName: "Luis",
    lastName: "ironhack"
  }

  return (
    <div className={student.firstName === "Lui" ? 'student-red' : 'student-blue'} onClick="" id="">
      Student full name: {student.firstName.toUpperCase()} - {capitalize(student.lastName)}
      <img src={logo} alt="" />
    </div>
  )
}

export default Student;
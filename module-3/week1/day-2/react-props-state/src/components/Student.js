
// function Student(props) {
//   console.log('Props:', props);
//   return (
//     <div className={props.student.surveyDone ? "good-student student" : "bad-student student"}>
//       <h3>Student name: {props.student.name}</h3>
//       <p>Bootcamp: {props.student.bootcamp}</p>
//     </div>
//   )
// }

// function Student({ student }) {

//   return (
//     <div className={student.surveyDone ? "good-student student" : "bad-student student"}>
//       <h3>Student name: {student.name}</h3>
//       <p>Bootcamp: {student.bootcamp}</p>
//     </div>
//   )
// }

// props = { name: "", bootcamp: "", surveyDone }
function Student({ name, bootcamp, surveyDone }) {

  return (
    <div className={surveyDone ? "good-student student" : "bad-student student"}>
      <h3>Student name: {name}</h3>
      <p>Bootcamp: {bootcamp}</p>
    </div>
  )
}

export default Student;
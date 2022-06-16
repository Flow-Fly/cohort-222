function Card(props) {
  console.log('Props', props);
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default Card;
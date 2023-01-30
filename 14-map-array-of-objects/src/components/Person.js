function Person(props) {
  const { firstName, lastName, email, img } = props

  return (
    <div className="card">
      <img src={img} alt="person" />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>{email}</p>
    </div>
  )
}

export default Person

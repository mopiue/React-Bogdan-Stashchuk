import './App.css'
import persons from './data/persons'
import Person from './components/Person'

function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        const { id, firstName, lastName, email, img } = person
        return (
          <h1>
            <Person
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              img={img}
            />
          </h1>
        )
      })}
    </div>
  )
}

export default App

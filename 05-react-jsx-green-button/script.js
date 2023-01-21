const App = ({ inititalButtonText, inititalClassesList }) => {
  const [buttonText, setButtonText] = React.useState(inititalButtonText)
  const [classesList, setClassesList] = React.useState(inititalClassesList)

  const onButtonClick = () => {
    setButtonText('Hello from React')
    setClassesList('green-btn')
  }

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App inititalButtonText="Click me" />)

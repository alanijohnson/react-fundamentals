// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
    const usernameRef = React.useRef(null);
    const [errorState, setErrorState] = React.useState(false);
  function handleSubmit(event) {
      event.preventDefault();
      const value = usernameRef.current.value;
      onSubmitUsername(value);
      event.target.elements.username.value = "";
  }

  function handleChange(event) {
      if (event.target.value.toLowerCase() !== event.target.value) {
          setErrorState(true);
      } else {
          setErrorState(false);
      }
  }

  const Error = (props) => {
      const visibility = errorState ? "visible" : "hidden";
      return <div style={{visibility: visibility, color:'red'}}>{props.children}</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input ref={usernameRef} type="text" id="username" onChange={handleChange}/>
      </div>
      <button type="submit" disabled={errorState}>Submit</button>
        <Error>"The text must be lowercase"</Error>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

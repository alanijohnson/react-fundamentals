// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div className="box--small box">small lightblue box</div>
const mediumBox = <div className="box--medium box">medium pink box</div>
const largeBox = <div className="box--large box">large orange box</div>



const Box = (props) => {
  return (
      <div className={props.className}>{props.children}</div>
  );
}

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box className="box box--large">Test</Box>
    </div>
  )
}

export default App

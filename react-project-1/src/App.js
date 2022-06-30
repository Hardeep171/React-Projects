import Cart from "./components/Cart";
import React from 'react'
class App extends React.Component {
  
  render() {
    return (
      <>

      <Cart />
       
      </>
    )
  }
}

export default App;

// constructor(props) {
  //   super(props)
  //   console.log("Inside Constructor")
  //   this.state = {
  //     count: 0,
  //   }
  // }
  // componentDidMount() {
  //   console.log("Inside Mounting");
  //   console.log("-------mounting Finished------")
  // }
  // componentDidUpdate() {
  //   console.log("Inside did Mount");
  //   console.log("-------UPDATING mount Finished------")
  // }
  // componentWillUnmount() {
  //   console.log('Inside component will mount')
  //   console.log("-------will mount Finished------")
  // }

   /* <h1>count:{this.state.count}</h1>

        <button onClick={() => this.setState((prevState) => ({ count: prevState.count + 1 } ))
      }
      >Increment Count
      </button> */
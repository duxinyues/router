import React from "react";
import {Page1}  from "./components/page1"
const CountContext = React.createContext();
// function App(prop) {
//  const [num,setNum] = useState(10);
//  const  btn = ()=>{
//    setNum(10);
//  }
//   return <CountContext.Provider value={num}>
//         <button onClick={btn}>+</button>
//         <Page1 />
//   </CountContext.Provider>;
// }


class  App extends React.Component{
  state={
    count:0
  }
 if(){}
  render(){
    return <CountContext.Provider value={this.state.count}>
    <Page1 count={this.state.count} />
    <button onClick={()=>{
      this.setState({
        count:this.state.count+1
      })
    }}>+</button>
   
    </CountContext.Provider>
  }
}

export default App;

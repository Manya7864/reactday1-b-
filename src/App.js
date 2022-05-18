import "./App.css";
import Navbar from "./component/Logo";
import Button1 from "./component/button";
import Link from "./component/Link";
import '../src/component/style1.css'

function App() {
  let linktext=["Service","Project","About"]
  let linktext1=linktext.map((el)=>
  {
    return <a href=" "><li>{el}</li></a>
  })
  return <div className="App">


<div className="navbar1">
<Navbar/>
<Link className="navbar2" display={linktext1}/>
<Button1 />
</div>





  </div>;
}

export default App;

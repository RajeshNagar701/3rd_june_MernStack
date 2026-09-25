import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import Css_react from "./css/Css_react";
import Jsx_comp from "./Jsx/Jsx_comp";
import About from "./Layout/About";
import Home from "./Layout/Home";
import Main_props from "./Props/Main_props";
import React_bootstrap from "./React_bootstrap/React_bootstrap";

function App() {
  return (
    <div>
        {
          //1) component & type
          // <Func_component/>
          // <Class_component/>

          //2) Layout
          //<Home/>
          //<About/>

          //3) jsx
          //<Jsx_comp/>
        
          //4) css in react
          //<Css_react />

          //5) Props
          //<Main_props/>

          //6) Readyment component React bootstrap / MUI
          <React_bootstrap/>  
        }
       
      
       
        
    </div>
  );
}

export default App;

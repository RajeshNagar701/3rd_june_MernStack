import Class_component from "./Component/Class_component";
import Func_component from "./Component/Func_component";
import Css_react from "./css/Css_react";
import Jsx_comp from "./Jsx/Jsx_comp";
import About from "./Layout/About";
import Home from "./Layout/Home";
import Module_css from "./Module_css/Module_css";
import MUI from "./MUI/MUI";
import Main_props from "./Props/Main_props";
import React_bootstrap from "./React_bootstrap/React_bootstrap";
import App_routing from "./Routing_src/App_routing";
import Sass_css from "./Sass_css/Sass_css";
import Class_state from "./State/Class_state/Class_state";
import Func_state from "./State/Func_state/Func_state";
import Styled_component from "./Styled_component/Styled_component";
import A from "./useContext/A";
//import A from "./useContext/Props_driling/A";


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
          //<Module_css/>
          //<Sass_css/>

          //5) Props
          //<Main_props/>

          //6) Readyment component React bootstrap / MUI => custome styled component
          //<React_bootstrap/>
          //<MUI/>  
          //<Styled_component/>

          //7) State  => onject {property:value}
          //<Class_state/>
          //<Func_state/>

          //8) Routing
          //<App_routing/>

          //9) propsDrilling / useContext,createContext
          //<A/> // A FROM props_driling
          <A/>   // A FROM useContext
       }
       
      
       
        
    </div>
  );
}

export default App;

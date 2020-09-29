import React from 'react'
import Form from './components/skills'
import Add from './components/Add'
import Edit from './components/Edit'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

const App=()=>{
  return(
    <div>
     
     <BrowserRouter>
     
      <Switch>
        <Route path="/add" component={Add}></Route>
        <Route path="/edit/:id" component={Edit}></Route>
        <Form/>
      </Switch>
     
     </BrowserRouter>
     
      
    </div>
  )
}

// import React,{useEffect} from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css/dist/js/materialize.min.js'
// // import logo from './logo.svg';
// import './App.css';
// import Form from './components/skills'
// import {Provider} from 'react-redux'
// import store from './store'
// import AddTechModal from './components/techs/AddTech'


// const App=()=> {
//   useEffect(()=>{
//     //Init the materialize JS
//     M.AutoInit();
//   })
  
//   return (
//     <Provider store={store}>
//       <React.Fragment>
      
//         {/* <Seachbar/> */}
//         <div className="container">
//           <AddTechModal/>
//           {/* <AddBtn/>
//           <AddLogModal/>
//           <EditLogModal/>
//           <AddTechModal/>
//           <TechListModal/>
//           <Logs/>
          
//        */}
          
//         </div>
//       </React.Fragment>
//       </Provider>
//   );
// }


export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Pages/Landing';
import TeacherList from './Pages/TeacheList';
import TeacherForm from './Pages/TeacherForm';


function Routers(){
    return(
        <BrowserRouter>
          <Route path="/"  exact component={Landing} />
          <Route path="/study"   component={TeacherList} />
          <Route path="/give-classes"   component={TeacherForm} />
        </BrowserRouter>
    )

}


export default Routers;
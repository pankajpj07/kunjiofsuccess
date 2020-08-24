import React, { Suspense, lazy,useEffect } from 'react';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer2'
import {  Switch, Route } from 'react-router-dom';
import Loader from "./Components/Loader";
import Contact from "./Components/Contact3";
import ReactGA from "react-ga"
//import Homepage from './Components/Homepage'
//import Privacy_policy from './Components/Privacy_policy'
//import Disclaimer from './Components/Disclaimer'
//import TodoList from './Components/TodoList'
//import Terms from './Components/Terms'
//import PageNotFound from './Components/PageNotFound'
//import About from './Components/About'
//import StartupCal from './Components/StartupCal.js'

//React Lazy Loading Enabled
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Homepage")), 100);
  });
});
const TodoList = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/TodoList")), 100);
  });
});
const StartupCal = lazy(() => import('./Components/StartupCal.js'));
const About = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/About")), 100);
  });
});
const Terms = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Terms")), 100);
  });
});
const Privacy_policy = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Privacy_policy")), 100);
  });
});
const Disclaimer = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Disclaimer")), 100);
  });
});
const PageNotFound = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/PageNotFound")), 100);
  });
});
const Social = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Services/Social")), 100);
  });
});
const Web = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Components/Services/Web")), 100);
  });
});
// React Lazy Loading End

const App=()=>{
  useEffect(() => {
    ReactGA.initialize("UA-168735476-1");
    ReactGA.pageview(window.location.pathname);
    console.log("google");
  }, [window.location.pathname]);

    return(
        <>
        <Navbar/>
          <Suspense fallback={<Loader/>}>
            <Switch>
            
                    <Route exact path='/' component={Home}/>
                    <Route  path='/todolist' component={TodoList}/>
                    <Route  path='/startup-calculator' component={StartupCal}/>
                    <Route  path='/about-us' component={About}/>
                    <Route  path='/terms-and-conditions' component={Terms}/>
                    <Route  path='/privacy-policy' component={Privacy_policy}/>
                    <Route  path='/disclaimer' component={Disclaimer}/>
                    <Route  path='/social' component={Social}/>
                    <Route  path='/web' component={Web}/>
                    <Route  path='/contact-us' component={Contact}/>
                    <Route  path='/*' component={PageNotFound}/>
          
            </Switch>

            </Suspense>
          <Footer/>
          
        </>
    )
}

export default App 
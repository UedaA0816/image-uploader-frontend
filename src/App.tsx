import React, { useEffect, useState } from 'react';
import { Route, Switch, BrowserRouter, Link, useLocation, Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import Index from './pages/Index/Index';
import Login from './pages/Login/Login';

type TestProps = {
	// name: string;
};

const Test: React.FC<TestProps> = () => {
  const location = useLocation<{num:string}>()
  const [state, setstate] = useState("")
  console.log(location);
  useEffect(() => {
    const num = location.state?.num + location.pathname
    setstate(num)   
    console.log("useEffect");
    
  }, [location])
  
	return (
		<div className="text-xl whitespace-normal">
			<p>{location.pathname}</p>
      <p>{state}</p>
      <input type="text" value={state} onChange={(change)=>{setstate(change.target.value)}} />
			<div>
				<div>
					<Link
						to={{
							pathname: "/",
							state: { num: state },
						}}>
						/
					</Link>
				</div>
				<div>
        <Link
						to={{
							pathname: "/about",
							state: { num: state },
						}}>
						/about
					</Link>
				</div>
				<div>
        <Link
						to={{
							pathname: "/dashboard",
							state: { num: state },
						}}>
						/dashboard
					</Link>
				</div>
			</div>
		</div>
	);
};

const App: React.FC = () => {
  const authenticated = false
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/home' exact>
					<Home/>
				</Route>
				<Route path='/login' exact>
					<Login/>
				</Route>
        <Route path='/' exact>
          <Index />
        </Route>
				<Route>
          {authenticated ? <Redirect to="/home" /> : <Redirect to="/" />}
        </Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;

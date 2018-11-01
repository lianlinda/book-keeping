import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch} from 'react-router-dom'
import accountRouter from './page/account/_router'
import Detail from './page/detail/detail'
import Chart from './page/chart'
import Find from './page/find'
import Mine from './page/mine'
import Keeping from './page/keeping'
import Bill from './page/bill'
import NotFind from './page/notFind'
import './css/common.less';

class App extends Component {
  render() {
    return (
        <Router>
          <div className='app'>
            <Switch>
              <Redirect from='/' to='/detail' exact/>
              <Route path='/detail' component={Detail}/>
              <Route path='/chart' component={Chart}/>
              <Route path='/find' component={Find}/>
              <Route path='/mine' component={Mine}/>
              <Route path='/keeping' component={Keeping}/>
              <Route path='/bill' component={Bill}/>
              <Route path='/account/:pathName' component={accountRouter}/>
              <Route component={NotFind}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;

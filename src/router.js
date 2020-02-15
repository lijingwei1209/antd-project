import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import App from './App'
import Login from './pages/login';
import Admin from './admin';
import Detail from './pages/detail'
import Buttons from './pages/ui/buttons'
import NoMatch from './pages/nomatch';
import basicTable from './pages/table/basicTable';
import highTable from './pages/table/highTable';


export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                {/* 由于登陆，主页，详情页三个页面是平级的，所以需要把这三个组件放在一个大的组件包裹起来，不用div包裹 */}
                {/* 子路由需要使用render放法 */}
                <App>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Switch>
                            <Route path="/admin/ui/buttons" component={Buttons}></Route>
                            <Route path="/admin/table/basic" component={basicTable}></Route>
                            <Route path="/admin/table/high" component={highTable}></Route>
                            <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                    <Route path="/detail" component={Detail}></Route>
                </App>
            </HashRouter>
        )
    }
}
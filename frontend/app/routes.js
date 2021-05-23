import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loadable from 'react-loadable';
import { history } from './store';
import Layout from './layout';
import LoadingComponent from './components/loading';

const Home = Loadable({
    loader: () => import('./container/home/home'),
    loading: LoadingComponent,
});

const Success = Loadable({
    loader: () => import('./container/success/success'),
    loading: LoadingComponent,
});

const Question = Loadable({
    loader: () => import('./container/question/question'),
    loading: LoadingComponent,
});
 

const Routes = () => {
    return (
            <ConnectedRouter history={history}>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/demo-question/:id" component={Question} />
                        <Route exact path="/success" component={Success} />
                        <Redirect from="/*" to="/" />
                    </Switch>
                </Layout>
            </ConnectedRouter>
        );
};

export default Routes;

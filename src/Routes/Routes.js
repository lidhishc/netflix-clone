import { Route, Switch } from 'react-router-dom'
import App from '../App'
import NoPageFound from '../Components/NoPage'


const routes = () => (
    <Switch>
        <Route path="/" exact component={App} />
        <Route path='' component={NoPageFound} />
    </Switch>
)

export default routes;
import Layout from 'Layouts/Layout';
import Index from 'pages';
import PandoraPage from 'pages/Pandora';
import TysonPage from 'pages/Tyson';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Layout>
                <Switch>
                    <Route path="/Pandora">
                        <PandoraPage />
                    </Route>
                    <Route path="/Tyson">
                        <TysonPage />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
                </Layout>
                
        </Router>
    </div>
  );

}
export default App;

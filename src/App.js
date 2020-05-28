import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard/Dashboard'
import LoginPage from './LoginPage'
import LandingPage from './LandingPage'
import About from './Dashboard/Pages/About'

class App extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          isSignedIn: null,
          jobs: []
      }
  }

  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '643741016668-ug4cdr0l0isdq77m37s4q924r26k9gtj.apps.googleusercontent.com'
      }).then(() => {
        const authInstance =  window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        this.setState({isSignedIn})

        authInstance.isSignedIn.listen(isSignedIn => {
          this.setState({isSignedIn})
        })
      })
    })
  }

  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => this.initializeGoogleSignIn()
    document.body.appendChild(script)
  }

  ifUserSignedIn(Component) {
      if (this.state.isSignedIn === null) {
          return (
              <h1>Checking if you're signed in...</h1>
          )
      }
      return this.state.isSignedIn ?
          <Component/> :
          <LoginPage/>
  }

  render() {
      return (
          <BrowserRouter>
              <Switch>
                <Route path="/about" component={About}>
                  <About/>
                </Route>
                <Route exact path="/">
                  <LandingPage/>
                </Route>
                <Route path="/dashboard" render={() => this.ifUserSignedIn(Dashboard)}/>
              </Switch>
          </BrowserRouter>
      )
  }
}

export default App

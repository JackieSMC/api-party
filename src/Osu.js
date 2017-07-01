import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Osu.css'
import OsuUser from './OsuUser'

class Osu extends Component {
    state = {
        username: ''
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/osu/${this.state.username}`)
    }


    render() {
        return (
            <div className="osu">
                <img className="github-osu" src="http://pre09.deviantart.net/141d/th/pre/f/2016/115/a/8/osu__logo_by_shadowthegod-da05j13.png" alt="osu logo"/>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                    type="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">Look up Osu! User</button>
                </div>
                </form>
                <Route exact path='/osu' render={() => <h3>Please enter a username to search on Osu!</h3>} />
                <Route path='/osu/:username' component={OsuUser} />
            </div>
        )
    }
}

export default Osu;
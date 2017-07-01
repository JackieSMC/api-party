import React, { Component } from 'react'
import './OsuUser.css'

class OsuUser extends Component {
    state = {
        user: {
            user_id: '',
            username: '',
            ranked_score: '',
            total_score: '',
            level: '',
            accuracy: '',
            pp_country_rank: '',

        }
    }
    constructor (props) {
        super(props)

        this.fetchUserData(this.props)
    }
    fetchUserData = (props) => {
        fetch(`https://osu.ppy.sh/api/${props.match.params.username}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    } 
    

    render() {
        const { user } = this.state
        return (
            <div className="osu-user">
                <h2>{user.username}</h2>
                <h3>Ranked_Score: {user.ranked_score}</h3>
                <h3>Total_Score: {user.total_score}</h3>
                <h3>Level: {user.level}</h3>
                <h3>Accuracy: {user.accuracy}</h3>
                <h3>PP Rank: {user.pp_country_rank}</h3>
            </div>
        )
    }
}

export default OsuUser;
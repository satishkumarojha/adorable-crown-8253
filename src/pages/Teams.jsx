import React from 'react'
import styles from "styled-components"

const Teams = () => {
  return (
    <MainTeamContainer >
        <div>
            <div>
                <div>
                    <p>
                       CALENDLY FOR TEAMS
                    </p>
                </div>
                <div>
                    <h1>
                       Smater scheduling for teams
                    </h1>
                </div>
                <div>
                    <p>
                      Whether your team's performance is measured by sales revenue, recruiting pipeline, 
                      or customer retention, scheduling automation enables your team to hit goals faster.
                    </p>
                </div>
                <div>
                    <button>Start for Free</button>
                    <button>Contact Sales</button>
                </div>
            </div>
            <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
    </MainTeamContainer>
  )
}

export default Teams

const MainTeamContainer = styles.div`
     width: 97%;
     margin:auto;
`
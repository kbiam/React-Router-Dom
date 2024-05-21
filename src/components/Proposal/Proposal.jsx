import React from 'react'
import { Link } from 'react-router-dom'
function Proposal() {
  return (
    <div>
        <br />
        <h1>Will You marry me?(Click on any)</h1>
        <Link to='/yes'><button>Yes</button></Link>    OR <Link to='/no'><button>No</button></Link>
        <img src="https://www.sharanim.com/en/Will-You-Marry-Me01/Will-You-Please-Marry-Me01.gif" alt="" />
    </div>
  )
}

export default Proposal
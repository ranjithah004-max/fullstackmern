import React from 'react'

const User = (props) => {
  return (
    <div>
        <h1>i am {props.name} from the dept {props.dept}</h1>
    </div>
  )
}

export default User
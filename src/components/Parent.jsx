import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Usha" age={21} isActive={true}/>
    </div>
  )
}

export default Parent
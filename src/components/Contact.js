import React from 'react'
const Contact=(props)=>{
 setTimeout(()=>{
     props.history.push('/about')
 },30000)
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione nostrum quia earum saepe, neque excepturi esse sit, sequi cumque reprehenderit sed, obcaecati corporis distinctio nisi quasi magnam consectetur iure!</p>
        <p>Switches to About page in 30s</p>
        </div>
    )
}
export default Contact
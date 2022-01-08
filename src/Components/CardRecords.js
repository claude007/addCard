import React from 'react'

const CardRecords = ({r}) => {
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]


    return (
    
        <div className = "card-wrapper m-3 "  >
        <div className = "card-top" style={{"backgroundColor": colors[r.id%5].primaryColor}}></div>
        <div className = "task-holder">
            <span className = "card-header" style={{"backgroundColor": colors[r.id%5].secondaryColor, "borderRadius": "10px"}}>{r.fullname}</span>
            <p className = "mt-3">{r.username}</p>
            <p className = "mt-1">{r.email}</p>
            <p className = "mt-1">{r.password}</p>

            <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                {/* <button>click</button> */}
            </div>
    </div>
    </div>
   
    )
}

export default CardRecords

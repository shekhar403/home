import React from 'react'

function ShowArray({fruits}) {
    return (
        <div>
            <ul>
                {
                    fruits.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ShowArray
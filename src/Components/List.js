import React from 'react'
import './List.css'

function List({list, tag_1, tag_2, tag_3}) {
    return (
        <div className="list_data">
            <div className="list_name">
                <h2>{list}</h2>
            </div>
            <div className="icon">
                <div className="check">
                  <span>{tag_1}</span>
                </div>
                <div className="check">
                    <span>{tag_2}</span>
                </div>
                <div className="check">
                  <span>{tag_3}</span>
                </div>
            </div>
        </div>
    )
}

export default List

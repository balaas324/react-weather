import React from 'react'

export const LocationTable = ({locationsProp, currentProp, onSelect}) => {
    return (
        <div>
        <h2>Locations</h2>
        <table className="table table-hover">
          <thead>
          <tr>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
            {locationsProp.map((location, index) => 
                <tr key={index} className={currentProp?.id === location.id ? 'table-primary' : ''}
                    onClick={() => onSelect(location)}
                >
                    <td>{location.name}</td>
                </tr>)}
          </tbody>
        </table>
      </div>
    )
}

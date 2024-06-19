import React from 'react'

function DestinationCrad({destination}) {
  return (
    <div id="card" className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="h-32 w-32"
              src={destination.imageUrl}
              alt={destination.imageAlt}
            />
            <div className="px-6 py-4">
              <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>
              <p className="text-gray-600">${destination.averagePrice} / night average</p>
              <div className="mt-4">
                <a href="#" className="text-brand-dark hover:text-brand">
                  Explore {destination.propertyCount} properties
                </a>
              </div>
            </div>
          </div>
  )
}

export default DestinationCrad
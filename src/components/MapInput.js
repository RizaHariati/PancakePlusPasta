import React, { useState, useEffect } from "react"
import {
  Circle,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet"

const MapInput = ({ address, setAddress }) => {
  const [position, setPosition] = useState([-6.175392, 106.827153])
  const [position2, setPosition2] = useState([-6.175392, 106.827153])

  const [zoom, setZoom] = useState(13)

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "calc(80vh - 180px)" }}
    >
      <Circle
        center={position}
        radius={2500}
        pathOptions={{ color: "#ffcc80" }}
      />
      <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=DuAeGEVB9dINzwNvrM6L"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <Marker position={position}>
        <Popup>We're here</Popup>
      </Marker>
      <GetCoordinates
        position={position}
        position2={position2}
        setPosition2={setPosition2}
        address={address}
        setAddress={setAddress}
      />
    </MapContainer>
  )
}

export default MapInput

const GetCoordinates = ({ position, position2, setPosition2, setAddress }) => {
  const map = useMap()
  const [inArea, setInArea] = useState(false)

  useEffect(() => {
    if (!map) return
    setInArea(true)
    map.on("click", e => {
      const location = e.latlng

      let x = (Math.abs(location.lat) + position[0]) * 100
      let y = (Math.abs(location.lng) - position[1]) * 100
      const distance = Math.sqrt(x * x + y * y)
      distance > 2.2 ? setInArea(false) : setInArea(true)

      setPosition2([location.lat, location.lng])
    })
  }, [map])

  useEffect(() => {
    const fetchData = async () => {
      const longitude = position2[1]
      const latitude = position2[0]

      const resp = await fetch(
        `https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?f=pjson&featureTypes=&location=${longitude},${latitude}`
      )

      const data = await resp.json()
      const { Neighborhood, District, Region, Postal } = data.address
      const takeAddress = { Neighborhood, District, Region, Postal }
      setAddress({ inArea, location: takeAddress })
    }
    fetchData()
  }, [position2])

  return (
    <Marker position={position2}>
      <Popup>
        <b>Your Locations</b>
      </Popup>
    </Marker>
  )
}

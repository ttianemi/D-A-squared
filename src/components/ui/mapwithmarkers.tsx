import { Map, MapMarker, MapTileLayer, MapZoomControl } from "@/components/ui/map"
import type { LatLngExpression } from "leaflet"
import { LogoPin } from "@/components/LogoPin"
import { useMap } from "react-leaflet"
import { useEffect } from "react"

function FlyToLocation({ target }: { target: [number, number] | null }) {
    const map = useMap()
    useEffect(() => {
        if (target) {
            map.flyTo(target, 16)
        }
    }, [target, map])
    return null
}

export default function MapWithMarkers({ flyTarget }: { flyTarget?: [number, number] | null }) {
    const CITIES = [
        {
            name: "Kunayeva",
            coordinates: [51.129824, 71.427707] satisfies LatLngExpression,
        },
        {
            name: "Akmeshit",
            coordinates: [51.120974, 71.423112] satisfies LatLngExpression,
        },
        {
            name: "Syganak",
            coordinates: [51.121346, 71.428111] satisfies LatLngExpression,
        },
        {
            name: "Arqa",
            coordinates: [51.105731, 71.431466] satisfies LatLngExpression,
        },
        {
            name: "Botan",
            coordinates: [51.099956, 71.417690] satisfies LatLngExpression,
        },
        {
            name: "Kaldayakova",
            coordinates: [51.118579, 71.460689] satisfies LatLngExpression,
        },
        {
            name: "Baitursynova",
            coordinates: [51.126064, 71.466531] satisfies LatLngExpression,
        },
        {
            name: "Nazhimedenova",
            coordinates: [51.115548, 71.491915] satisfies LatLngExpression,
        },
        {
            name: "Mega",
            coordinates: [51.089304, 71.405897] satisfies LatLngExpression,
        },
        {
            name: "Mangilik",
            coordinates: [51.088596, 71.425342] satisfies LatLngExpression,
        },
        {
            name: "NU",
            coordinates: [51.090326, 71.395844] satisfies LatLngExpression,
        },
        {
            name: "Kamila",
            coordinates: [51.100766, 71.417638] satisfies LatLngExpression,
        },
    ]

    return (
        <div className="h-[500px] w-full">
      <Map center={CITIES[3].coordinates} zoom={16}>
        <MapTileLayer />
        <MapZoomControl position="bottom-12 right-4" />
        <FlyToLocation target={flyTarget ?? null} />
        {CITIES.map((city) => (
          <MapMarker key={city.name} position={city.coordinates} icon={<LogoPin />} />
        ))}
      </Map>
    </div>
    )
}
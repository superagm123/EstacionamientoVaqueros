import React from 'react';
import './Location.css';
import {
	MapContainer, 
	TileLayer,
	Marker,
	Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet';
import logo from '../img/logo.png';

const center = [20.886559062695074, -103.83922971755015];
const url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=RaGKBYNAW1XOoAn2V7VA";
const attribution = "https://www.maptiler.com/copyright/" 

const Location = () => {
	return(
		<React.Fragment>
		    <h1 id="location" className="f-subheadline tc">ubicación</h1>
			<MapContainer
			className="map-container"
			center={center}
			zoom={18}
			style={{width: '100vw', height: '100vh'}}>
			<TileLayer
			  url={url}
			  attribution={attribution}
			> 
			</TileLayer>
			<Marker 
			position={center}
			icon={new Icon({iconUrl: logo, iconSize: [70, 70], iconAnchor: [12, 41]})}>
				<Popup>Estacionamiento Vaqueros!</Popup>
			</Marker>
			</MapContainer>
		</React.Fragment>
	);
}

export default Location;
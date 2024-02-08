'use client'
import GoogleMapReact from 'google-map-react';
import Image from "next/image";

import styles from '@/app/components/map/map.module.css'

/**
 * 
 * @param {text} - adresse de localisation
 * @returns 
 */
const TextComponent = ({ text }) => (
  <section className={styles.mapLocalisation}>
    {/* Logo de Localisation */}
    <Image
      src={"/pictures/svg/localisation.svg"}
      width={32}
      height={32}
      alt="logo de localisation de l'entreprise"
    ></Image>
    <h3>
      {text}
    </h3>
  </section>
)

export default function Map() {

  const defaultProps = {
    center: {
      lat: 47.476494,
      lng: 2.872069
    },
    zoom: 17
  };

  return (
    // Id map ancrer le composant
    <div id="map" className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCmh3aXcA9xMZ144pqLZSMXpqdzoKM17wU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <TextComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="8 route de Gien, Léré"
        />
      </GoogleMapReact>
    </div>
  );
}




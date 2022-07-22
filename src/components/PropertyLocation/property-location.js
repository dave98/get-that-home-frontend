import { CardTitle } from "../SimpleCard/style";
import { Text } from "../typography";
import { LocationWrapper } from "./style";
import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

const PropertyLocation = ({ zoom, location, country }) => {
  const [center, setCenter] = useState({
    lat: 40.7128,
    lng: -74.006,
  });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA5kEmbyBuoEHTi0lcQ9Ytr73QWePlFhow",
  });

  const centerMap = useMemo(() => {
    return center;
  }, [center]);

  // useEffect(() => {
  //   if (location) {
  //     const getCoordinates = async () => {
  //       const results = await geocodeByAddress(location);
  //       const latLng = await getLatLng(results[0]);
  //       return latLng;
  //     };
  //     getCoordinates().then((latLng) => {
  //       setCenter(latLng);
  //     });
  //   }
  // }, [location]);

  // console.log(center.lat, center.log);

  if (!isLoaded) {
    return null;
  }
  return (
    <LocationWrapper>
      <CardTitle>{country}</CardTitle>
      <Text>{location}</Text>
      <GoogleMap
        mapContainerStyle={{
          height: "760px",
          width: "760px",
          borderRadius: "10px",
          marginBottom: "1rem",
        }}
        zoom={zoom}
        center={centerMap}
      >
        <Marker position={centerMap} />
      </GoogleMap>
    </LocationWrapper>
  );
};

export default PropertyLocation;

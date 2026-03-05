import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Container from "../../Sheard/Navbar/Cotainer/Container";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const data = useLoaderData();
  const position = [23.8103, 90.4125];
  const mapRef = useRef(null);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    const target = data.find((res) =>
      res.district.toLowerCase().includes(search.toLowerCase()),
    );
    if (target) {
      const coors = [target.latitude, target.longitude];
      mapRef.current.flyTo(coors, 15);
    }
  };
  return (
    <Container>
      <div className="my-12">
        <div className="mb-6">
          <form onSubmit={handleSearch}>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                name="search"
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </form>
        </div>
        <div className="h-[800px]">
          <MapContainer
            className="h-[800px]"
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            ref={mapRef}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data.map((res) => (
              <Marker position={[res.latitude, res.longitude]}>
                <Popup>
                  <strong>{res.district}</strong> <br />
                  Servic Area:{res.covered_area.join(", ")} .
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </Container>
  );
};

export default Coverage;

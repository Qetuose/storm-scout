import L from "leaflet";
import { useEffect } from "react";
function Map() {
  useEffect(() => {
    // Initialize the map
    const map = L.map("mapid").setView(
      [11.370145110859028, -1.2670584461125145],
      2.435625,
    );

    // Add the tile layer
    L.tileLayer(
      "https://tile.jawg.io/d4c030c1-0971-4f86-b6f5-62f63e64d471/{z}/{x}/{y}{r}.png?access-token=GYpToc8hOKMTLUhNvsG7Ujs3j4z7CkxWMPop2llN2YhxrkH40au968A39DIAfm98",
      {},
    ).addTo(map);

    // Add attribution
    map.attributionControl.addAttribution(
      '<a href="https://www.jawg.io?utm_medium=map&utm_source=attribution" target="_blank">&copy; Jawg</a> - <a href="https://www.openstreetmap.org?utm_medium=map-attribution&utm_source=jawg" target="_blank">&copy; OpenStreetMap</a>&nbsp;contributors',
    );

    // Cleanup the map when the component unmounts
    return () => {
      map.remove();
    };
  }, []);

  return <div id="mapid" className="rounded-lg" />;
}

export default Map;

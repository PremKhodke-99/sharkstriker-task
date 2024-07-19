import React from "react";
import Globe from "react-globe.gl";
const N = 10;
const arcsData = [...Array(N).keys()].map(() => ({
  startLat: (Math.random() - 0.5) * 180,
  startLng: (Math.random() - 0.5) * 360,
  endLat: (Math.random() - 0.5) * 180,
  endLng: (Math.random() - 0.5) * 360,
  color: [
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)],
    ["#B43632", "#EEB649", "#CCD556"][Math.round(Math.random() * 3)]
  ]
}));

export default function Earth() {
  const globeElement = React.useRef();

  React.useEffect(() => {
    // Auto-rotate
    globeElement.current.controls().autoRotate = true;
    globeElement.current.controls().autoRotateSpeed = 1;
    globeElement.current.controls().enableZoom = false;
  }, []);



  return (
    <div
      style={{
        background: "#000010",
      }}
    >
      <div>
        <Globe
          width={400}
          height={400}
          waitForGlobeReady={false}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          arcsData={arcsData}
          arcColor={"color"}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcStroke={0.1}
          animateIn={false}
          arcDashAnimateTime={20000}
          ref={globeElement}
          enablePointerInteraction={false}
        />
      </div>
      
    </div>
  );
}

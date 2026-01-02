import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestPin() {
  const box = useRef(null);

  useLayoutEffect(() => {
    console.log("GSAP INIT");

    ScrollTrigger.create({
      trigger: box.current,
      start: "top top",
      end: "+=500",
      pin: true,
      pinSpacing: true,
      markers: true,
    });
  }, []);

  return (
    <>
      <div style={{ height: "100vh", background: "red" }} />
      <div
        ref={box}
        style={{
          height: "100vh",
          background: "black",
          color: "white",
          fontSize: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        PIN ME
      </div>
      <div style={{ height: "100vh", background: "blue" }} />
    </>
  );
}

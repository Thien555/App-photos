import React from "react";
import "./banner.scss";
export default function Banner({ title, backgroundUrl }) {
  const backgroundBanner = backgroundUrl
    ? { backgroundImage: `url(${backgroundUrl})` }
    : {};
  return (
    <section className="banner" style={backgroundBanner}>
      <h1 className="banner__title">{title}</h1>
    </section>
  );
}

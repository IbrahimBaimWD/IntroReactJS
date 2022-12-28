import React from "react";
import "./Home.css";
import Lingkaran from "../Lingkaran";
import Kotak from "../Kotak";
import PersegiPanjang from "../PersegiPanjang";
import Garis from "../Garis";

export default function Home() {
  return (
    <>
      <div className="Home-body">
        <div className="Display">
          <PersegiPanjang name="Header" />
        </div>

        <div className="Display">
          <Lingkaran name="Ada Photo" />
          <Lingkaran />
        </div>

        <div className="Display">
          <Garis />
          <Garis />
        </div>

        <div className="Display">
          <Kotak kotak="Instagram" />
          <Kotak kotak="Facebook" />
          <Kotak kotak="Twitter" />
        </div>
      </div>
    </>
  );
}

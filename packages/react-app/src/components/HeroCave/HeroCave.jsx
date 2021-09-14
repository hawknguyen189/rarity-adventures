import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";
import Hero from "../Heroes/Hero";
import Attribute from "./Attribute";
import useRarity from "../../hooks/useRarity";

const HeroCave = ({ signer }) => {
  const router = useRouter();
  const { embarkAdventure } = useRarity();
  const [heroID, setHeroID] = useState(router.query.tokenID);
  return (
    <div className="container py-3">
      <p className="h1 text-uppercase fw-bold text-white py-3"> Hero Cave</p>
      <div className="row">
        <div className="col-sm-6 container">
          <Hero
            tokenID={heroID}
            embarkAdventure={embarkAdventure}
            signer={signer}
            animation={true}
          ></Hero>
        </div>
        <div className="col-sm-6 container">
          <p>Inventory</p>
        </div>
      </div>
      <div className="row herocave-tabs pt-3">
        <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active fw-bolder text-white bg-transparent"
              id="attribute-tab"
              data-bs-toggle="tab"
              data-bs-target="#attribute"
              type="button"
              role="tab"
              aria-controls="attribute"
              aria-selected="true"
            >
              Attributes
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fw-bolder text-white bg-transparent"
              id="skill-tab"
              data-bs-toggle="tab"
              data-bs-target="#skill"
              type="button"
              role="tab"
              aria-controls="skill"
              aria-selected="false"
            >
              Skills
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link fw-bolder text-white bg-transparent"
              id="crafting-tab"
              data-bs-toggle="tab"
              data-bs-target="#crafting"
              type="button"
              role="tab"
              aria-controls="crafting"
              aria-selected="false"
            >
              Crafting
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="attribute"
            role="tabpanel"
            aria-labelledby="attribute-tab"
          >
            <Attribute></Attribute>
          </div>
          <div
            className="tab-pane fade"
            id="skill"
            role="tabpanel"
            aria-labelledby="skill-tab"
          >
            Skill tab here
          </div>
          <div
            className="tab-pane fade"
            id="crafting"
            role="tabpanel"
            aria-labelledby="crafting-tab"
          >
            Crafting
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCave;

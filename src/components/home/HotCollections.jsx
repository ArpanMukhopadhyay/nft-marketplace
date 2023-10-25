import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import ItemDetails from "../../pages/ItemDetails";
import NftSlider from "./NftSlider";


const HotCollections = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections')
      .then(response => {
        setData(response.data)
        setLoading(false);
      })
      .catch(error => {
      });
    }, [])
  return (
    
    <section id="section-collections" className="no-bottom">
      <div className="container" data-aos="fade-in" 
        data-aos-once="true"
        data-aos-duration="800">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-in" 
              data-aos-once="true"
              data-aos-delay = "200"
              data-aos-duration="800">
                    Hot Collections
              </h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
            <NftSlider/>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
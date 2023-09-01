import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from "axios";

const HotCollections = () => {
  const [users, setUsers] = useState([]);
  async function main(){
    const {data} = await axios.get('https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections');
    setUsers(data) 
  }
  useEffect(()=> {
    main()
  },[])

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {new Array(6).fill(0).map((_, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12" key={users[index]?.id}>
              <div className="nft_coll">
                <div className="nft_wrap">
                  <Link to={`/item-details/${users[index]?.nftId}`}>
                    <img src={users[index]?.nftImage} className="lazy img-fluid" alt="" />
                  </Link>
                </div>
                <div className="nft_coll_pp">
                  <Link to="/author">
                    <img className="lazy pp-coll" src={users[index]?.authorImage} alt="" />
                  </Link>
                  <i className="fa fa-check"></i>
                </div>
                <div className="nft_coll_info">
                  <Link to="/explore">
                    <h4>{users[index]?.title}</h4>
                  </Link>
                  <span>ERC-{users[index]?.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotCollections;

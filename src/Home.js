import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>

        <div className="home__row">
          <Product
            id="2131547"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback "
            price={19.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id="2131548"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
            price={239.9}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="2131549"
            title="Samsung LC49SDFSDGD 49' Curved LED GAming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="2131542"
            title="Amazon Echo 3rd generation | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="2131543"
            title="New Aple iPad Pro (12.9-inch, Wi-Fi, 128 GB) - Silver (4th generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="2131541"
            title="Samsung LC49KJHSADSFXEN 49' Curved LED Gaming monitor - Super Ultra Wide Dual "
            price={1094.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

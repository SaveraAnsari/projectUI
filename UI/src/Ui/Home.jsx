

    import React from 'react';
import pic1 from "../assets/home.jpg";
import pic from "../assets/about_nadra.png"
import pic2 from "../assets/succession-1.jpg";
import pic3 from "../assets/PAO.jpg";
import pic4 from "../assets/home.png";
// import styles from "./Home.css"
import "./home.css";
 

function Home() {
  return (
    // <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
    //   <div className="carousel-inner">
    //     <div className="carousel-item active">
    //       <img src={pic1} className="d-block w-100" alt="First slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={pic3} className="d-block w-100" alt="Third slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={pic2} className="d-block w-100" alt="Second slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={pic3} className="d-block w-100" alt="Third slide" />
    //     </div>
    //     <div className="carousel-item">
    //       <img src={pic4} className="d-block w-100" alt="Fourth slide" />
    //     </div>
    //   </div>
    // </div>

    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={pic1} class="d-block w-100" alt="1"/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={pic2} class="d-block w-100" alt="2"/>
    </div>
    <div class="carousel-item">
      <img src={pic3}class="d-block w-100" alt="3"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default Home;

  


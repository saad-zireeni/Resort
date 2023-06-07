/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Home.css";
import A1 from "../../images/a1.jpg";
import A2 from "../../images/a2.jpg";
import R1 from "../../images/r1.jpg";
import R2 from "../../images/r2.jpg";
import R3 from "../../images/r3.jpg";
import CC from "../../images/c.jpg";

function Home() {
  return (
    <>
      <div className="al-haleme">
        <section className="header">
          <div className="overlay">
            <h1 className="subtitle">
              Discover the Ultimate Resort Experience
            </h1>
            <h1 className="title">Escape to Paradise</h1>
          </div>
          <div className="shape">
            <svg viewBox="0 0 1500 200">
              <path d="m 0,240 h 1500.4828 v -71.92164 c 0,0 -286.2763,-81.79324 -743.19024,-81.79324 C 300.37862,86.28512 0,168.07836 0,168.07836 Z" />
            </svg>
          </div>
          <div className="mouse-icon">
            {/* <BsMouse className='wheel' /> */}
          </div>
        </section>
        {/*  */}

        <section className="about top" id="about">
          <div className="container flex">
            <div className="left">
              <div className="img">
                <img src={A1} alt="" className="image1" />
                <img src={A2} alt="" className="image2" />
              </div>
            </div>
            <div className="right">
              <div className="heading">
                <h5>RAISING COMFOMRT TO THE HIGHEST LEVEL</h5>
                <h2>Welcome to Our Resort</h2>
                <p>
                  Escape to a tranquil paradise where luxury meets natural
                  beauty. Our resort offers a breathtaking retreat nestled
                  amidst lush landscapes, pristine beaches, and azure waters.
                  Immerse yourself in a world of relaxation and rejuvenation as
                  our dedicated team caters to your every need.
                </p>
                <p>
                  Indulge in our exquisite accommodations, meticulously designed
                  to provide comfort and elegance. Each room boasts stunning
                  views, modern amenities, and a serene ambiance, ensuring a
                  peaceful and restful stay.
                </p>
                <button className="btn1">READ MORE</button>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper top">
          <div className="container">
            <div className="text">
              <h2>Our Amenities</h2>
              <p>
                Enjoy a refreshing swim in our spacious and well-maintained
                swimming pool. Whether you want to relax by the poolside or take
                a few laps, our pool offers a perfect way to cool off and
                unwind.
              </p>
              <div className="content">
                <div className="box flex">
                  <i className="fas fa-swimming-pool" />
                  <span>Swimming pool</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-dumbbell" />
                  <span>Gym &amp; yogo</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-spa" />
                  <span>Spa &amp; massage</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-ship" />
                  <span>Boat Tours</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-swimmer" />
                  <span>Surfing Lessons</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-microphone" />
                  <span>Conference room</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-water" />
                  <span>Diving &amp; smorking</span>
                </div>
                <div className="box flex">
                  <i className="fas fa-umbrella-beach" />
                  <span>Private Beach</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="room top" id="room">
          <div className="container">
            <div className="heading_top flex1">
              <div className="heading">
                <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
                <h2>Rooms $ Suites</h2>
              </div>
              <div className="button">
                <button className="btn1">VIEW ALL</button>
              </div>
            </div>
            <div className="content grid">
              <div className="box">
                <div className="img">
                  <img src={R1} alt="" />
                </div>
                <div className="text">
                  <h3>Superior Soble Rooms</h3>
                  <p>
                    {" "}
                    <span>$</span>129 <span>/12H</span>{" "}
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={R2} alt="" />
                </div>
                <div className="text">
                  <h3>Superior Soble Rooms</h3>
                  <p>
                    {" "}
                    <span>$</span>129 <span>/12H</span>{" "}
                  </p>
                </div>
              </div>
              <div className="box">
                <div className="img">
                  <img src={R3} alt="" />
                </div>
                <div className="text">
                  <h3>Superior Soble Rooms</h3>
                  <p>
                    {" "}
                    <span>$</span>129 <span>/12H</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="wrapper wrapper2 top">
          <div className="container">
            <div className="text">
              <div className="heading">
                <h5>AT THE HEART OF COMMUNICATION</h5>
                <h2>People Say</h2>
              </div>
              <div className="para">
                <p>
                  Absolutely stunning resort with top-notch amenities and
                  breathtaking views. The staff went above and beyond to ensure
                  our stay was exceptional. The rooms were beautifully
                  appointed, and the attention to detail was impressive. Highly
                  recommend for a luxurious and unforgettable getaway
                </p>
                <div className="box flex">
                  <div className="img">
                    <img src={CC} alt="" />
                  </div>
                  <div className="name">
                    <h5>KATE PALMER</h5>
                    <h5>IDAHO</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map top">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d319902.4884269005!2d36.36353357839292!3d31.97154996934578!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjo!4v1685908547943!5m2!1sen!2sjo"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </div>
    </>
  );
}

export default Home;

import React, { useState, useEffect } from 'react';


function Genres(){
    const [genres, setGenres] = useState(["Action", "Comedy", "Drama", "Horror", "Crime", "War"]);
    const [images, setImages] = useState([
        "https://www.syfy.com/sites/syfy/files/2019/05/john-wick-2017-image-3840x2400.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFSMtfjI52HK8wyfES8JWFnV8RZCIfNsxH_A&usqp=CAU",
        "https://www.japantimes.co.jp/wp-content/uploads/2023/01/np_file_207015.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc3H56QjPPq3RHMIUIjPo9trfY6ZAbIUgtA&usqp=CAU",
        "https://www.chambersstudent.co.uk/media/1871/crime.jpeg?width=607px&height=404px",
        "https://media.timeout.com/images/103492941/750/562/image.jpg"
    ]);

      console.log("----------------",genres)
    return (
      <>
        <section id="portfolio">
          <div className="container">
            <h2 className="heading">Genres</h2>
            <div className="row">
              {genres.map((genre, index) => (
                <div
                  className="portfolio-item column-3"
                  key={index}
                  data-descr={genre}
                  width={"400px"}
                  height={"400px"}
                >
                  <a target="_blank" href={images[index]}>
                    <img
                      src={images[index]}
                      className="img-fluid"
                      alt={genre}       
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );

}


export default Genres;
import React, {useState} from "react";
import ClientItem from "./ClientItem";
import ClientText from "./ClientText";

function Clients() {
  
  const [text, setText] = useState('Click to learn more');

  const hanleClick = (item)=>{
    setText(item);
  }

  return (
    <>
      <div className="container-client">
        <h2 className="heading">Our Clients Trust Us</h2>
          <ClientText text={text}/>

        <div className="row">
          <ClientItem onClickAct={hanleClick} text="Prime Video: A video streaming service that offers a wide range of TV shows, movies, and original content."
           imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc19f2f28ae9a11357ccd5_icon.svg" />
          <ClientItem onClickAct={hanleClick} text="Universal: A film studio that produces and distributes movies across various genres, including action, comedy, drama, and horror." 
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63d8dc8bc27c5b45f4c5f1b7_Universal_Pictures_logo.svg" />
          <ClientItem onClickAct={hanleClick} text="Paramount Pictures: One of the oldest film studios that has produced classic movies, such as The Godfather, Titanic, and Forrest Gump."
           imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63d8dc59154bae2e9bb8c2c7_g8.svg" />
          <ClientItem onClickAct={hanleClick} text="Sony Pictures: A film and television production company that has created popular franchises, such as Spider-Man and Men in Black." 
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc18967b9cdc4ee19a0131_Sony_Pictures_Motion_Picture_Group-Logo.wine.svg" />
          <ClientItem onClickAct={hanleClick} text="Disney: A media conglomerate that produces movies, TV shows, and theme park attractions featuring beloved characters like Mickey Mouse, Elsa, and Iron Man." 
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc216ef28ae9dac35c9d0b_Untitled%20(7).svg" />
        </div>
        <div className="row">
          <ClientItem onClickAct={hanleClick} text="Warner Bros. Pictures: A film studio that produces blockbuster movies and franchises, such as Harry Potter, Batman, and The Matrix."
           imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc2060968a454199aa4071_Untitled%20(5).svg" />
          <ClientItem onClickAct={hanleClick} text="Studio Canal: A European film production and distribution company that specializes in independent and foreign-language films."
           imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc2072c49993331aa173e9_Untitled%20(4).svg" />
          <ClientItem onClickAct={hanleClick} text="Leonine: A German media company that produces and distributes movies and TV shows across various genres, including crime, comedy, and drama." 
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc207c72279f4f013b4667_Untitled%20(1).svg" />
          <ClientItem onClickAct={hanleClick} text="FreeVee: An online video platform that offers user-generated content and original web series."  
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc208ca6a94d134e4b33ab_Untitled%20(2).svg" />
          <ClientItem onClickAct={hanleClick} text="Sky: A European media company that provides satellite TV, broadband, and mobile services across several countries." 
          imgUrl="https://uploads-ssl.webflow.com/63c6ac8baa2efd71448d136d/63dc20e3da82e822d9c42296_Untitled%20(6).svg" />
        </div>
      </div>
    </>
  );
}


export default Clients;
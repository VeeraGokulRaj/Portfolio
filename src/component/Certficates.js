import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css"; // Import the CSS for pure-react-carousel
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import JustAMin from "../assets/Certficates/JustAMin.jpg";
import StandUp from "../assets/Certficates/StatndUp.jpg";
import ieee from "../assets/Certficates/IEEE.jpg";
import intern from "../assets/Certficates/Intern.jpg";
import PaperPresentation from "../assets/Certficates/PaperPresentation.jpg";
import PhotoGraphy from "../assets/Certficates/PhotoGraphy.jpg";

function Certficates() {
  const certificates = [
    {
      title: "INTERN - Played a key role in frontend development, emphasizing real-time updates and user-friendly interfaces",
      link: intern,
      alt: "intern"
    },
    {
      title:
        "Presented the IEEE paper titled 'Enhancing Campus Security Through Smart Surveillance System' at the ICACCS 2024 conference",
      link: ieee,
      alt: "ieee"
    },
    {
      title:
        "Presented a paper on Women Safety Wristband at the National Level Technical Symposium 2023 held at Kongunadu College of Engineering",
      link: PaperPresentation,
      alt: "PaperPresentation"
    },
    {
      title: "Won 1st prize in Standup comedy in K.S.Rangasamy College of Technology Culturals-2022",
      link: StandUp,
      alt: "StandUp"
    },
    {
      title: "Won 1st prize in Just a minute talk in K.S.Rangasamy College of Engineering Symposium-2023",
      link: JustAMin,
      alt: "JustAMin"
    },
    {
      title: "Won 2nd prize in Photography in K.S.Rangasamy College of Engineering Symposium-2023",
      link: PhotoGraphy,
      alt: "PhotoGraphy"
    }
    // Add other certificate objects here...
  ];
  const certificateSlides = certificates.map((certificate, index) => (
    <Slide index={index} key={index}>
      <div className="flex flex-col items-center justify-center">
        <img src={certificate.link} alt={certificate.alt} className="w-full h-full object-contain" />
        <h3 className="text-center mt-4">{certificate.title}</h3>
      </div>
    </Slide>
  ));

  return (
    <div className="dark:bg-[#111111] bg-white dark:text-[white] text-[#616262] flex items-center justify-center h-full pt-36">
      <div className="w-full max-w-lg p-4">
        <h1 className="font-semibold text-2xl mb-20 text-center">MY CERTIFICATES</h1>
        <CarouselProvider
          naturalSlideWidth={400}
          naturalSlideHeight={380}
          totalSlides={certificates.length}
          infinite={true}
          visibleSlides={1}
          interval={3000}
          isPlaying={true}
          playDirection="forward"
        >
          <Slider className="certificateslides">
            <a href="https://drive.google.com/file/d/16iZJ97PzVi5n_9M9jAI8oH6gfQHJst5h/view?usp=drivesdk" target="blank">
              {certificateSlides}
            </a>
          </Slider>
          <div className="flex items- justify-around mt-4 ">
            <ButtonBack className="navigationbtnleft navigationbtn">
              <FaArrowAltCircleLeft size={32} />
            </ButtonBack>
            <ButtonNext className="navigationbtnright navigationbtn">
              <FaArrowAltCircleRight size={32} />{" "}
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default Certficates;

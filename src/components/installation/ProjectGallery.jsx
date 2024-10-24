import ReactCardSlider from "react-card-slider-component";

const ProjectGallery = () => {
  const sliderClick = () => {
    console.log("Card clicked");
  };

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div className="container mx-auto p-0">
      <div className="gallary-head text-center pb-4">
        <h2 className="font-bold">Our Projects and Installations</h2>
      </div>
      <div className="flex justify-center">
        <ReactCardSlider slides={slides} />
      </div>
    </div>
  );
};

export default ProjectGallery;

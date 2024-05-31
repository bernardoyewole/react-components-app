import Header from "./components/Header";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Import images
import ReactImgOne from './img/react-img-one.jpg';
import ReactImgTwo from './img/react-img-two.jpg';
import ReactImgThree from './img/react-img-three.jpg';
import ReactImgFour from './img/react-img-four.jpg';

function App() {
  const title = "What is React?";
  const content = `React is a popular JavaScript library for building user interfaces,
  particularly single-page applications. Developed and maintained by
  Facebook, React allows developers to create large web applications
  that can update and render efficiently in response to data changes.`;

  const titleTwo = "How it feels learning React for the first time";
  const imageSources = [
    {
      id: 1001,
      src: ReactImgOne,
      alt: "React Logo"
    },
    {
      id: 1002,
      src: ReactImgTwo,
      alt: "Component Diagram"
    },
    {
      id: 1003,
      src: ReactImgThree,
      alt: "Virtual DOM"
    },
    {
      id: 1004,
      src: ReactImgFour,
      alt: "React Code Snippet"
    }
  ];

  return (
    <>
      <Header></Header>
      <main>
        <Banner bannerTitle={title} bannerContent={content}></Banner>
        <Gallery galleryTitle={titleTwo} images={imageSources}></Gallery>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;

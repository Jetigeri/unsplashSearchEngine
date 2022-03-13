import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map((image) => (
    <ImageCard key={image.id} image={image}></ImageCard>
  ));

  return <div className="image-list">{images}</div>;
};

export default ImageList;

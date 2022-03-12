const ImageList = (props) => {
  console.log(props.images);
  const images = props.images.map(({alt_description, id, urls}) => (
    <img key={id} src={urls.regular} alt={alt_description}></img>
  ))

  return <div>{images}</div>;
};

export default ImageList;

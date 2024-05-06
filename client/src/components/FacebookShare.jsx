const CustomFacebookShareButton = ({ url, quote, hashtags }) => {
  const handleClick = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&hashtag=${encodeURIComponent(
        hashtags.join(", ")
      )}`,
      "facebook-share-dialog",
      "width=626,height=436"
    );
  };

  return <button onClick={handleClick}>Share on Facebook</button>;
};

export default CustomFacebookShareButton;

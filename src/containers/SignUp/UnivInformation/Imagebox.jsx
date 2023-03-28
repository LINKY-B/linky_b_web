import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserSchoolImg } from "store/ducks/signUpSlice";
import { UploadImageButton, PreviewImage, ContentBox } from "../SignUp.style";

const ImageBox = () => {
  const uploadImage = useRef();
  const previewImage = useRef();
  const dispatch = useDispatch("signUp");

  const uploadButtonHandler = () => {
    uploadImage.current.click();
  };

  const changeImageHandler = (e) => {
    console.log(e.target.files[0]);
    previewImage.current.src = URL.createObjectURL(e.target.files[0]);
    dispatch(addUserSchoolImg(e.target.files[0]));
  };
  return (
    <ContentBox>
      <UploadImageButton onClick={uploadButtonHandler}>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png"
          style={{ display: "none" }}
          ref={uploadImage}
          onChange={changeImageHandler}
        ></input>
        +
      </UploadImageButton>
      <PreviewImage className="PreviewImage">
        <span>업로드 이미지</span>
        <img
          ref={previewImage}
          src="noImg"
          onLoad={(e) => (e.currentTarget.style.display = "inline")}
          onError={(e) => (e.currentTarget.style.display = "none")}
          alt="업로드 이미지"
        />
      </PreviewImage>
    </ContentBox>
  );
};

export default ImageBox;

import BasicInformation from "containers/SignUp/BasicInformation/BasicInformation";
import ProfileInformation from "containers/SignUp/ProfileInformation/ProfileInformation";
import TermsService from "containers/SignUp/TermsService/TermsService";
import UnivInformation from "containers/SignUp/UnivInformation/UnivInformation";
import { useState } from "react";
import { useSelector } from "react-redux";

const SignUp = () => {
  const [univImage, setUnivImage] = useState(null);

  const getImage = (image) => {
    setUnivImage(image);
  };

  const page = useSelector((state) => state.signUp.page);

  const renderSwitch = () => {
    switch (page) {
      case 1:
        return <TermsService />;
      case 2:
        return <BasicInformation />;
      case 3:
        return <UnivInformation getImage={getImage} />;
      case 4:
        return <ProfileInformation univImage={univImage} />;
      default:
        return null;
    }
  };

  return <>{(() => renderSwitch())()}</>;
};

export default SignUp;

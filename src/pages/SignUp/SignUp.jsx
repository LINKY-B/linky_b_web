import BasicInformation from "containers/SignUp/BasicInformation/BasicInformation";
import ProfileInformation from "containers/SignUp/ProfileInformation/ProfileInformation";
import TermsService from "containers/SignUp/TermsService/TermsService";
import UnivInformation from "containers/SignUp/UnivInformation/UnivInformation";
import { useState } from "react";

const SignUp = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const renderSwitch = () => {
    switch (page) {
      case 1:
        return <TermsService nextPage={nextPage} />;
      case 2:
        return <BasicInformation nextPage={nextPage} />;
      case 3:
        return <UnivInformation nextPage={nextPage} />;
      case 4:
        return <ProfileInformation />;
      default:
        return null;
    }
  };

  return <>{(() => renderSwitch())()}</>;
};

export default SignUp;

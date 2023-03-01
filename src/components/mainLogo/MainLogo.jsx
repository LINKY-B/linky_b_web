import React, { useEffect } from "react";
import { MainLogoWrapper, MainLogoImg } from "./MainLogo.style";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";

const MainLogo = React.memo(({ top }) => {
  const theme = useTheme();
  return (
    <MainLogoWrapper top={top}>
      <MainLogoImg></MainLogoImg>
      <Spacing margin={theme.spacing.lg}></Spacing>
      <Text fontSize={theme.fontSize.lg}>마음맞는 선후배 매칭 서비스</Text>
    </MainLogoWrapper>
  );
});

MainLogo.propTypes = {
  top: PropTypes.number,
};
export default MainLogo;

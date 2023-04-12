import DotAddButton from "components/buttons/DotAddButton";
import SelectButton from "components/buttons/SelectButton";
import MainModal from "components/mainModal/MainModal";
import Spacing from "components/spacing/Spacing";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { theme } from "styles/theme";
import { ContentBox, FlexWrapper } from "../SignUp.style";

const Keyword = ({ keywordList, title, children }) => {
  const [keywordModal, setKeywordModal] = useState(false);
  const [selectKeyword, setSelectKeyword] = useState(
    Array(keywordList.length).fill(false),
  );

  const dispatch = useDispatch("signUp");

  const onClickToggle = () => {
    if (keywordModal) {
      dispatch(
        addUserInfo({
          key: title,
          value: keywordList.filter((keyword, idx) => selectKeyword[idx]),
        }),
      );
    }
    setKeywordModal(!keywordModal);
  };

  const onClickKeyword = (e) => {
    setSelectKeyword(
      selectKeyword.map((v, idx) => (idx === Number(e.target.id) ? !v : v)),
    );
  };
  return (
    <>
      <ContentBox>
        {children}
        <FlexWrapper>
          <DotAddButton onClick={onClickToggle} />
          {selectKeyword.map((selected, idx) =>
            selected ? (
              <SelectButton key={idx} isSelected>
                {keywordList[idx]}
              </SelectButton>
            ) : null,
          )}
        </FlexWrapper>
      </ContentBox>
      {keywordModal ? (
        <MainModal
          title={title}
          buttonTitle="적용하기"
          buttonColor={theme.colors.mainGreen}
          onClickButton={onClickToggle}
        >
          <FlexWrapper>
            {keywordList.map((keyword, idx) => (
              <SelectButton
                key={keyword}
                id={idx}
                onClick={onClickKeyword}
                isSelected={selectKeyword[idx]}
              >
                {keyword}
              </SelectButton>
            ))}
          </FlexWrapper>

          <Spacing />
        </MainModal>
      ) : null}
    </>
  );
};

// flex-wrap : wrap
export default Keyword;

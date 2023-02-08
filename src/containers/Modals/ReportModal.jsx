import AlertModal from "components/alertModal/AlertModal";
import SelectButton from "components/buttons/SelectButton";
import Text from "components/text/Text";
import { useState } from "react";
import { useTheme } from "styled-components";
import {
  ReportModalWrapper,
  ReportTextArea,
  SelectButtonWrapper,
} from "./Modals.style";

const reportContent = [
  "상업적 광고/판매",
  "낚시/놀람/도배",
  "욕설/비하",
  "정당 또는 정치인 비하/선거운동",
  "유출/사칭/사기",
  "음란물 불건전 대화",
];

export const ReportModal = ({ userNickname, onClickReport, onClickClose }) => {
  const theme = useTheme();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [reason, setReason] = useState("");

  const handleClick = (title) => {
    setSelectedTitle(title);
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    if (value.length > 200) {
      return;
    }
    setReason(value);
  };

  return (
    <AlertModal
      title={`${userNickname} 님을 \n 신고하시겠습니까?`}
      buttonTitle="신고하기"
      buttonColor="grey"
      onClickButton={() => onClickReport(selectedTitle, reason)}
      onClickClose={onClickClose}
    >
      <ReportModalWrapper>
        <SelectButtonWrapper>
          {reportContent.map((title) => {
            const selected = title == selectedTitle;
            return (
              <SelectButton
                type="rectangle"
                key={title}
                onClick={() => handleClick(title)}
                isSelected={selected}
              >
                <Text
                  fontSize={theme.fontSize.xxs}
                  color={
                    selected ? theme.colors.mainGreen : theme.colors.fontGrey
                  }
                >
                  {title}
                </Text>
              </SelectButton>
            );
          })}
        </SelectButtonWrapper>
        <ReportTextArea
          placeholder="신고사유를 적어주세요/(200자 이내)"
          onChange={handleChange}
          value={reason}
        />
      </ReportModalWrapper>
    </AlertModal>
  );
};

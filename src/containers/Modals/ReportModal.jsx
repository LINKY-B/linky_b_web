import { memo, useCallback, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { AlertModal } from "components/alertModal";
import SelectButton from "components/buttons/SelectButton";
import { Text } from "components/text";
import {
  ReportModalWrapper,
  SelectButtonWrapper,
  StyledReportTextArea,
} from "./Modals.style";

const reportContent = [
  "상업적 광고/판매",
  "낚시/놀람/도배",
  "욕설/비하",
  "정당 또는 정치인 비하/선거운동",
  "유출/사칭/사기",
  "음란물 불건전 대화",
];

const ReportModal = ({ userNickName, onClickReport, onClickClose }) => {
  const theme = useTheme();
  const [selectedTitle, setSelectedTitle] = useState("");
  const reportReason = useRef("");

  const handleClick = (title) => {
    setSelectedTitle(title);
  };

  const handleChange = useCallback((e) => {
    const value = e.currentTarget.value;
    if (value.length > 200) {
      return;
    }
    reportReason.current = e.currentTarget.value;
  });

  const handleSubmit = useCallback(() => {
    onClickReport(selectedTitle, reportReason.current);
  });

  const SelectButtons = () => (
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
              color={selected ? theme.colors.mainGreen : theme.colors.fontGrey}
            >
              {title}
            </Text>
          </SelectButton>
        );
      })}
    </SelectButtonWrapper>
  );

  return (
    <AlertModal
      title={`${userNickName} 님을 \n 신고하시겠습니까?`}
      buttonTitle="신고하기"
      buttonColor="grey"
      onClickButton={handleSubmit}
      onClickClose={onClickClose}
    >
      <ReportModalWrapper>
        <SelectButtons />
        <StyledReportTextArea
          placeholder="신고사유를 적어주세요/(200자 이내)"
          onChange={handleChange}
          maxLength={200}
        />
      </ReportModalWrapper>
    </AlertModal>
  );
};

export default memo(ReportModal);

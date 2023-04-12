import CheckButton from "components/buttons/CheckButton";
import { useDispatch, useSelector } from "react-redux";
import { allAgree, checkToggle } from "store/ducks/termsServiceSlice";
import { ButtonBoxStyled } from "../SignUp.style";

const ButtonBox = ({ idx, children }) => {
  const dispatch = useDispatch("termsService");
  const checkterms = useSelector((state) => state.termsService);

  const onClickSingle = (e) => {
    dispatch(checkToggle(e.currentTarget.name));
  };

  const onClickAll = () => {
    dispatch(allAgree());
  };
  return (
    <ButtonBoxStyled>
      <CheckButton
        name={String(idx)}
        onClick={idx === 0 ? onClickAll : onClickSingle}
        inversed={idx === 0 && checkterms[0]}
        isChecked={checkterms[idx]}
      />
      {children}
    </ButtonBoxStyled>
  );
};

export default ButtonBox;

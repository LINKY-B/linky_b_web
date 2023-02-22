import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./Draggable.style";

/**
 *
 * @param {component} children 드래그 할 대상 컴포넌트
 * @param {function} onClick 대상 컴포넌트를 클릭했을 때의 콜백
 * @param {function} onLeftFull 대상 컴포넌트를 왼쪽으로 쭉 당겼을 때 콜백
 * @param {function} onRightFull 대상 컴포넌트를 오른쪽으로 쭉 당겼을 때 콜백
 *
 * @returns 컴포넌트를 어느 정도 좌우로 드래그 되게 만들어줍니다.
 */
const Draggable = ({ children, onLeftFull, onRightFull, onClick }) => {
  const dragRef = useRef(null);
  const x = useRef(0);
  const isLeftFull = useRef(false);
  const isRightFull = useRef(false);

  const handleMouseDown = (e) => {
    const type = e.type.toLowerCase();
    if (type === "mouseup") {
      return;
    }

    const pageX = type === "mousedown" ? e.pageX : e.touches[0].pageX;
    x.current = x.current === 0 ? pageX : x.current;
    dragRef.current.addEventListener("mousemove", handleDrag);
    dragRef.current.addEventListener("touchmove", handleDrag);
  };

  const handleMouseUp = (e) => {
    dragRef.current.style.transform = `translateX(${0}px)`;
    dragRef.current.removeEventListener("mousemove", handleDrag);
    dragRef.current.removeEventListener("touchmove", handleDrag);

    isLeftFull.current = false;
    isRightFull.current = false;

    // on handle case just onclick
    const pageX = e.pageX;
    if (x.current === pageX) {
      onClick();
    }

    x.current = 0;
  };

  useEffect(() => {
    if (dragRef.current) {
      dragRef.current.addEventListener("mousedown", handleMouseDown);
      dragRef.current.addEventListener("mouseup", handleMouseUp);

      dragRef.current.addEventListener("touchstart", handleMouseDown);
      dragRef.current.addEventListener("touchend", handleMouseUp);
    }

    /**
     * ref 관련해서 더 안전하게 할 수 있는 방법 더 찾아보기.
     */
    return () => {
      if (!dragRef?.current) {
        return;
      }

      dragRef.current.removeEventListener("mousedown", handleMouseDown);
      dragRef.current.removeEventListener("mouseup", handleMouseUp);

      dragRef.current.addEventListener("touchstart", handleMouseDown);
      dragRef.current.addEventListener("touchend", handleMouseUp);
    };
  }, [dragRef]);

  const handleDrag = (e) => {
    const pageX =
      e.type.toLowerCase() === "mousemove" ? e.pageX : e.touches[0].pageX;
    const val = (pageX - x.current) / 2;

    if (Math.abs(val) < 10) {
      isLeftFull.current = false;
      isRightFull.current = false;
    }
    if (val > 75) {
      !isLeftFull.current && onLeftFull();
      isLeftFull.current = true;
      handleMouseUp(e);
      return;
    }
    if (val < -75) {
      !isRightFull.current && onRightFull();
      isRightFull.current = true;
      handleMouseUp(e);
      return;
    }
    dragRef.current.style.transform = `translateX(${val}px)`;
  };

  return <Wrapper ref={dragRef}>{children}</Wrapper>;
};

Draggable.propTypes = {
  onClick: PropTypes.func,
  onLeftFull: PropTypes.func,
  onRightFull: PropTypes.func,
};

export default Draggable;

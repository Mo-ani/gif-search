import { useEffect, useState } from "react";


export const navBarScroll = () => {
    const [navHeight, setNavHeight] = useState("8rem");
    const [inputWidth, setInputWidth] = useState("60%");
    const [opacity, setOpacity] = useState('1');
    const [left, setLeft] = useState('60%');
    const [leftMobile, setLeftMobile] = useState('68%');



    const listenScrollEvent = () => {
      window.scrollY > 10 ? setNavHeight("6rem") : setNavHeight("8rem");
      window.scrollY > 10 ? setInputWidth("80%") : setInputWidth("60%");
      window.scrollY > 10 ? setLeft("50%") : setLeft("60%");
      window.scrollY > 10 ? setLeftMobile("50%") : setLeftMobile("68%");
      window.scrollY > 10 ? setOpacity("0") : setOpacity("1");

    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    return{
        navHeight,
        opacity,
        inputWidth,
        left,
        leftMobile
    }
}

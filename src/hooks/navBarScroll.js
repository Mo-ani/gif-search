import { useEffect, useState } from "react";


export const navBarScroll = () => {
    const [navHeight, setNavHeight] = useState("8rem");
    const [opacity, setOpacity] = useState('1');
    const [left, setLeft] = useState("translate(-50%,-50%)");
    const [leftMobile, setLeftMobile] = useState('translate(-20%,-50%)');



    const listenScrollEvent = () => {
      window.scrollY > 10 ? setNavHeight("6rem") : setNavHeight("8rem");
      window.scrollY > 10 ? setLeft("translate(-63%,-50%)") : setLeft("translate(-50%,-50%)");
      window.scrollY > 10 ? setLeftMobile("translate(-50%,-50%)") : setLeftMobile(leftMobile);
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
        left,
        leftMobile
    }
}

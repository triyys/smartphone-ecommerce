import { onAuthStateChanged } from "firebase/auth";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../configs/firebase";
import { mainNavigations } from "../../constants"
import LoginByGoogle from "./LoginByGoogle";
import Logout from "./Logout";

const Header = () => {
    const { pathname } = useLocation();
    const activeNavigation = useMemo(() => (mainNavigations.findIndex(
        (navigation) => navigation.path === pathname
    )), [pathname]);
    
    const headerRef = useRef();
    const menuLeft = useRef(null);

    const handleScroll = useCallback(() => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add("shrink");
        } else {
            headerRef.current.classList.remove("shrink");
        }
    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    const menuToggle = () => menuLeft.current.classList.toggle("active");

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className="bx bx-menu-alt-left"></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className="bx bx-chevron-left"></i>
                        </div>
                        {mainNavigations.map((item, index) => (
                            <div
                                key={index}
                                className={`header__menu__item header__menu__left__item ${index === activeNavigation ? "active" : ""}`}
                                onClick={menuToggle}
                            >
                                <Link to={item.path}>
                                    <span>{item.display}</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="header__menu__center">
                        TRIYYS
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <Link to="/cart">
                                <i className="bx bx-shopping-bag"></i>
                            </Link>
                        </div>
                        <LoginByGoogle/>
                        <Logout/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
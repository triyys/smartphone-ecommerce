import { signOut } from "firebase/auth"
import { auth } from "../../configs/firebase"

const Logout = () => {
    const handleClickLogout = async () => {
        await signOut(auth)
    }
    return (
        <div
            className="header__menu__item header__menu__right__item"
            onClick={handleClickLogout}
        >
            <i className="bx bxs-log-out"></i>
        </div>
    )
}

export default Logout
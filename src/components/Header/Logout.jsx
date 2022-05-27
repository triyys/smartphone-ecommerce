import { signOut } from "firebase/auth"
import { useDispatch } from "react-redux"
import { auth } from "../../configs/firebase"
import { logout } from "../../redux/auth/authSlice"

const Logout = () => {
    const dispatch = useDispatch()
    const handleClickLogout = async () => {
        await signOut(auth)

        dispatch(logout())
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
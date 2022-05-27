import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { auth } from "../../configs/firebase"
import { loginError, loginSuccess } from "../../redux/auth/authSlice"

const LoginByGoogle = () => {
    const dispatch = useDispatch()
    const handleClickLoginByGoogle = useCallback(async () => {
        const result = await signInWithPopup(auth, new GoogleAuthProvider())
        if (!result.user) {
            console.log(result)
            return
        }

        if (result.user) {
            const { uid, displayName, email, photoURL, phoneNumber } = result.user
            dispatch(loginSuccess({
                id: uid,
                name: displayName,
                email: email,
                avatar: photoURL,
                phoneNumber: phoneNumber,
            }))
            // dispatch(loginSuccess(currentUser))
        } else {
            dispatch(loginError())
        }
    }, [dispatch])
    return (
        <div
            className="header__menu__item header__menu__right__item"
            onClick={handleClickLoginByGoogle}
        >
            <i className="bx bxl-google"></i>
        </div>
    )
}

export default LoginByGoogle
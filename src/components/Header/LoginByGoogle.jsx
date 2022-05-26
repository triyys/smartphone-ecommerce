import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useCallback } from "react"
import { auth } from "../../configs/firebase"

const LoginByGoogle = () => {
    const handleClickLoginByGoogle = useCallback(async () => {
        const result = await signInWithPopup(auth, new GoogleAuthProvider())
        const currentUser = result.user

        if (currentUser) {
            // call store
        }
    }, [])
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
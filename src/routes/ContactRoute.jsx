import { useSelector } from "react-redux"
import MainLayout from "../layouts/MainLayout"

const ContactRoute = () => {
    const user = useSelector((state) => state.authSlice.user)
    return (
        <MainLayout>
            <h3>{user && user.name}</h3>
        </MainLayout>
    )
}

export default ContactRoute
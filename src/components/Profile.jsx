import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const { user, loading, handleLogout } = useContext(UserContext)
    const navigate = useNavigate()

    if (loading) {
        return (
            <div className="d-flex justify-content-center py-5">
                <div className="spinner-border" role="status"></div>
            </div>
        )
    }

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-6">
                    <h1 className="mb-4">Perfil</h1>
                    <div className="d-flex align-items-center justify-content-between">
                        <h6>Usuario: {user ? user.email : 'Cargando...'}</h6>
                        <button onClick={handleLogout} className="btn btn-danger">Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

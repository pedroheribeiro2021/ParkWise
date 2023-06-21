import { useRouter } from "next/router"


const Perfil = () => {
    const router = useRouter()
    const { username } = router.query

    return <h1>usuário {username} </h1>
}

export default Perfil
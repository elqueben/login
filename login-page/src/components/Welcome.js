import { useParams } from "react-router-dom"

export function Welcome() {

     const { id } = useParams()
 
    return (
        <div>
            WELCOME {id}
        </div>
    )
}
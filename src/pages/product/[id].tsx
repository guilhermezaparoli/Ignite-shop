import { useRouter } from "next/router"

export default function Product(){
    const {query} = useRouter()

    console.log(query)
    return(
        <h1>product: {query.id}</h1>
    )
}
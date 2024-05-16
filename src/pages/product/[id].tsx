import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"

export default function Product(){
    const {query} = useRouter()

    console.log(query)
    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eum necessitatibus dolorem alias cum incidunt et praesentium, iste fugiat itaque sint ad, quis expedita quidem magni, qui quam explicabo? Rerum?</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}
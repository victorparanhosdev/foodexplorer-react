
import { Container } from "./styles"
import { RotatingLines } from "react-loader-spinner"



export function Loading() {
    return (
        <Container>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </Container>
    )
}
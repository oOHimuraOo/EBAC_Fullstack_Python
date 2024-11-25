import { render, screen } from "@testing-library/react";
import Post from "..";

const mock: React.ReactNode = "Olha só que legal minha miniatura do Batmóvel."

describe('Teste do componente "Post":', () => {
    test('Deve renderizar o post corretamente:', ()=> {
        render(<Post children={mock} imageUrl="https://via.placeholder.com/600x600" />)
        expect(screen.getByText("Olha só que legal minha miniatura do Batmóvel.")).toBeInTheDocument()
    })

})



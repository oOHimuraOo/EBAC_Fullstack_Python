import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Post from "..";

const comentario_1 = 'Muito legal'
const comentario_2 = 'Realmente é muito legal'

describe('Teste do componente "PostComents"', () => {
    test('Deve renderizar corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })

    test(`Deve renderizar: "${comentario_1}" e "${comentario_2}"`, async () => {
        const { debug } = render(<Post />)
        const campo = screen.getByTestId('Campo-test')
        const btn = screen.getByTestId('Btn-submit')
        

        fireEvent.change(campo, {target: {value: comentario_1}})
        fireEvent.click(btn)
        fireEvent.change(campo, {target: {value: comentario_2}})
        fireEvent.click(btn)
        
        const li = screen.getAllByTestId("li-test")
        
        // eslint-disable-next-line testing-library/no-debugging-utils
        debug()
        
        await waitFor(() => {
            expect(li).toHaveLength(2)
        })
    })
})




function ProjectForm() {
    return (
        <form>
            <input type='text' placeholder="Insira o Nome do Projeto:" />
            <input type='number' placeholder="Insira o orçamento total:" />
            <div>
                <select name="category_id">
                    <option disabled>Selecione a Categoria:</option>
                </select>
            </div>
            <input type="submit" value='Criar Projeto' />
        </form>
    )
}

export default ProjectForm
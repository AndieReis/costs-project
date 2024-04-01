import { useState, useEffect } from 'react'

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o Nome do Projeto"

            />

            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o Orçamento Total"

            />

            <Select
                name="category_id"
                text="Selecione uma categoria"
                options={categories}

            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm
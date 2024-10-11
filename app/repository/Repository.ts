const getById = async (id: string, nome: string) => {


    const response = await
        fetch(

            `http://localhost:5000/${nome}/${id}`,
            { cache: 'no-cache' }
        )

    return response.json();

}

export { getById }
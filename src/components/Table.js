function Table({config, data}){
    const renderedHeaders = config.map((option)=>{
        return <th className="p-1 border">{option.label}</th>
    })

    const renderedRows = data.map((object) => {
        const renderedData = config.map((value)=>{
            return <td className="p-1 border">{value.render(object)}</td>
        })

        return <tr>{renderedData}</tr>


    })

    return(
        <table className="border m-3">
            <thead>
                <tr className="bg-gray-400 text-zinc-900">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )

}

export default Table;
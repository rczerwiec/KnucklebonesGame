import classNames from 'classnames'

function TableData({children, className ,header}){

    const dataClasses = classNames('border p-1 bg-gray-800', className)
    const headerClasses = classNames('border p-1 bg-gray-900', className)

    let content = <td className={dataClasses}>{children}</td>

    if(header){
        content = <th className={headerClasses}>{children}</th>
    }

    return(
        <>{content}</>
        
    )

}

export default TableData;
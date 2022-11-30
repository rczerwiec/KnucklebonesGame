import classNames from 'classnames'

function TableRow({children, className}){

    const classes = classNames('border', className)

    return(
        <tr className={classes}>
            {children}
        </tr>
    )

}

export default TableRow;
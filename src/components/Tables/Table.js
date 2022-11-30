import classNames from 'classnames'

function Table({children, className}){

    const classes = classNames('border', className)

    return(
        <table className={classes}>
            {children}
        </table>
    )

}

export default Table;
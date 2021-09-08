import React, { Fragment } from 'react';

import   './list.css'

const List =(props)=>{

    return(
    <Fragment> 
        <table>
        <tbody>
                <tr>
                    <td>{props.title}</td>
                    <td>{props.symbol}</td>
                    <td></td>
                </tr> 
                </tbody>
        </table>
    </Fragment>
    );
}
export default List;
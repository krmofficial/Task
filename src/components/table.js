import React, { useState, useEffect, useMemo } from 'react';
import Axios from 'axios';
import { useTable, usePagination } from 'react-table';
import COLUMNS from './columns';
import './table.css';


let Table = () => {



    let [users, setUsers] = useState([]);

    useEffect(() => {
        let dataUrl = 'https://reqres.in/api/users?page=1';

        Axios.get(dataUrl).then((res) => {
            setUsers(res.data);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => users, []);

    const tableInstance = useTable({
        columns,
        data
    },
        useTable);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
    } = tableInstance;

    return (
        <React.Fragment>
            <div>
                <pre>{JSON.stringify(users)}</pre>
                <h2 className="text-danger">Hi i am from table page</h2>
            </div>
            <table {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => {
                            return(
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column) => {
                                       return <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    })
                                }
                            </tr>
                            )
                        })
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </React.Fragment>
    );
};

export default Table;
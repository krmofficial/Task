import React, { useState, useEffect } from 'react';
import Axios from 'axios';

let MyTable = () => {

    let [data, setData] = useState({});
    let [users, setUser] = useState([]);

    let [counter, setCounter] = useState({
        count: 1
    });

    let PageIncr = () => {
        setCounter({
            count: counter.count + 1
        });
        getData();
    };

    let PageDecr = () => {
        setCounter({
            count: counter.count > 1 ? counter.count - 1 : 1
        });
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    let getData = () => {
        let dataUrl = `https://reqres.in/api/users?page=${counter.count}`;
        console.log(counter.count);

        Axios.get(dataUrl).then((res) => {
            setData(res.data);
            setUser(res.data['data']);

        }).catch((error) => {
            console.log(error);
        });

    }

    // let [counter, setCounter] = useState({
    //     counter : 1
    // });

    

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(data)}</pre>*/}
            {/*<pre>{JSON.stringify(users)}</pre>*/}
            {/*<pre>{JSON.stringify(counter)}</pre>*/}
            <div className="container">
                <table className="table table-hover table-striped text-center font-weight-bold">
                    <thead className="bg-dark text-white">
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.length > 0 ?
                                users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td className="font-weight-bold">{user.id}</td>
                                            <td className="font-weight-bold">{user.email}</td>
                                            <td className="font-weight-bold">{user.first_name}</td>
                                            <td className="font-weight-bold">{user.last_name}</td>
                                            <td>
                                                <img className="img-fluid h-20 w-25" alt="images" src={user.avatar} />
                                            </td>
                                        </tr>


                                    )
                                })
                                :
                                <tr>
                                    <td colSpan="5">No Data Found</td>
                                </tr>
                        }
                    </tbody>

                </table>

                <div className="text-center mb-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <button onClick={PageDecr} className="btn btn-sm btn-warning text-dark rounded-circle mx-2">
                            <h1>-</h1>
                        </button>

                        <h1 className="mx-2">{counter.count}</h1>

                        <button onClick={PageIncr} className="btn btn-sm btn-success text-dark rounded-circle mx-2">
                            <h1>+</h1>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default MyTable;
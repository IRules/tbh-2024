import React, {useEffect, useState} from 'react'
import {Surreal} from "surrealdb.node";

const Tests = () => {

    const [tests, setTests] = useState([])

    useEffect(
        async () => {

            const db = new Surreal()

            await db.connect("http://127.0.0.1:8000")
            await db.signin({
                username: "root",
                password: "root"
            })
            await db.use({
                ns: "tbh",
                db: "tbh"
            });


            db.query("SELECT * FROM runs").then(
                (result) => {
                    setTests(result[0])
                }
            )
        }, []
    )

    return (
        <div className="flex flex-col items-start w-full p-20">
            <div className="relative overflow-x-auto w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Test ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            User
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">Silver</td>
                        <td className="px-6 py-4">Laptop</td>
                    </tr>
                    {
                        tests.map(
                            (test) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {test.id}
                                        </th>
                                        <td className="px-6 py-4">{test.user}</td>
                                        <td className="px-6 py-4">{test.status}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Tests
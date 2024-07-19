import React from 'react'

const Table = () => {

    const tableData = [
        {
            title1: "Tenant",
            content1: "Root Tenant",
            title2: "Username"
        },
        {
            title1: "Application",
            title2: "Sensor",
            content2: "datasensor"
        },
        {
            title1: "Src IP",
            content1: "192.168.202.81",
            title2: "Dst IP",
            content2: "192.168.24.100"
        },
        {
            title1: "Src Type",
            content1: "private",
            title2: "Dst Type",
            content2: "private"
        },
        {
            title1: "Src Host",
            content1: "192.168.202.81",
            title2: "Dst Host",
            content2: "192.168.24.100"
        },
        {
            title1: "Src User",
            title2: "Dst User",
        },
        {
            title1: "Src Reputation",
            title2: "Dst Reputation"
        },
        {
            title1: "Src City",
            content1: "Unknown",
            title2: "Dst City",
            content2: "Unknown"
        },
        {
            title1: "Src Country",
            content1: "United States",
            title2: "Dst Country",
            content2: "United States"
        }
    ]

    return (
        <table className='table'>
            <tbody>
                {
                    tableData.map((item) => (
                        <tr>
                            <td>{item.title1}</td>
                            <td>{item.content1}</td>
                            <td>{item.title2}</td>
                            <td>{item.content2}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
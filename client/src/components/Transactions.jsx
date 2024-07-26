// import React, { useEffect, useState } from 'react'
// import moment from 'moment';
// import { Table, Input, message, Image } from 'antd';
// import axios from 'axios';

// const { Search } = Input;
// const columns = [
//     {
//         title: "Id",
//         dataIndex: "id",
//         width: "40px",
//     },
//     {
//         title: "Title",
//         dataIndex: "title",
//         width: "200px",
//     },
//     {
//         title: "Price",
//         dataIndex: "price",
//         render: (price) => parseFloat(price).toFixed(2),
//         width: "80px"
//     },
//     {
//         title: "Description",
//         dataIndex: "description",
//     },
//     {
//         title: "Category",
//         dataIndex: "category",
//         width: "120px"
//     },
//     {
//         title: "Sold",
//         dataIndex: "sold",
//         render: (sold) => sold ? "Yes" : "No",
//         width: "50px"
//     },
//     {
//         title: "Date",
//         dataIndex: "dateOfSale",
//         render: (date) => moment(date).format("DD MMM YYYY"),
//         width: "100px"
//     },
//     {
//         title: "Image",
//         dataIndex: "image",
//         render: (url) => <Image src={url} alt="Product Image" />,
//         width: "80px"
//     }
// ];

// function Transactions({ month, monthText }) {
//     const [data, setData] = useState();
//     const [loading, setLoading] = useState(false);
//     const [tableParams, setTableParams] = useState({
//         pagination: {
//             current: 1,
//             pageSize: 10
//         }
//     });

//     const getData = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axios.get(`https://roxiler-pvpf.onrender.com/transactions`, {
//                 params: {
//                     month,
//                     page: tableParams.pagination.current,
//                     limit: tableParams.pagination.pageSize,
//                     search: tableParams.search
//                 }
//             });

//             setData(data.transactions);
//             setLoading(false);
//             setTableParams({
//                 ...tableParams,
//                 pagination: {
//                     ...tableParams.pagination,
//                     total: data.totalCount,
//                 }
//             });
//             message.success('Data loaded successfully');
//         } catch (error) {
//             console.log(error);
//             message.error('Error loading data');
//         }
//     };

//     const handleTableChange = (pagination, filters, sorter) => {
//         setTableParams({
//             ...tableParams,
//             pagination
//         });

//         // `dataSource` is useless since `pageSize` changed
//         if (pagination.pageSize !== tableParams.pagination?.pageSize) {
//             setData([]);
//         }
//     };

//     const handleSearch = (value) => {
//         setTableParams({
//             ...tableParams,
//             search: value
//         });
//     }

//     useEffect(() => {
//         getData();
//     }, [JSON.stringify(tableParams), month]);

//     return (
//         <>
//             <Search
//                 placeholder="Search"
//                 allowClear
//                 onSearch={handleSearch}
//                 style={{
//                     width: 400,
//                     padding: "15px 0px"
//                 }}
//             />

//             <Table
//                 columns={columns}
//                 rowKey={(record) => record.id}
//                 dataSource={data}
//                 pagination={tableParams.pagination}
//                 loading={loading}
//                 onChange={handleTableChange}
//                 size='small'
//                 bordered
//                 title={() => <strong>Transactions for {monthText}</strong>}
//                 scroll={{ y: 540 }}
//             />
//         </>
//     )
// }

// export default Transactions

// second Change -->

// import React, { useEffect, useState } from "react";
// import moment from "moment";
// import { Table, Input, message, Image, Button } from "antd";
// import axios from "axios";

// const { Search } = Input;
// const columns = [
//   {
//     title: "Id",
//     dataIndex: "id",
//     width: "40px",
//   },
//   {
//     title: "Title",
//     dataIndex: "title",
//     width: "200px",
//   },
//   {
//     title: "Price",
//     dataIndex: "price",
//     render: (price) => parseFloat(price).toFixed(2),
//     width: "80px",
//   },
//   {
//     title: "Description",
//     dataIndex: "description",
//   },
//   {
//     title: "Category",
//     dataIndex: "category",
//     width: "120px",
//   },
//   {
//     title: "Sold",
//     dataIndex: "sold",
//     render: (sold) => (sold ? "Yes" : "No"),
//     width: "50px",
//   },
//   {
//     title: "Date",
//     dataIndex: "dateOfSale",
//     render: (date) => moment(date).format("DD MMM YYYY"),
//     width: "100px",
//   },
//   {
//     title: "Image",
//     dataIndex: "image",
//     render: (url) => <Image src={url} alt="Product Image" />,
//     width: "80px",
//   },
// ];

// function Transactions({ month, monthText }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [tableParams, setTableParams] = useState({
//     pagination: {
//       current: 1,
//       pageSize: 10,
//     },
//   });

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(
//         `https://roxiler-pvpf.onrender.com/transactions`,
//         {
//           params: {
//             month,
//             page: tableParams.pagination.current,
//             limit: tableParams.pagination.pageSize,
//             search: tableParams.search,
//           },
//         }
//       );

//       setData(data.transactions);
//       setLoading(false);
//       setTableParams({
//         ...tableParams,
//         pagination: {
//           ...tableParams.pagination,
//           total: data.totalCount,
//         },
//       });
//       message.success("Data loaded successfully");
//     } catch (error) {
//       console.log(error);
//       message.error("Error loading data");
//     }
//   };

//   const handleTableChange = (pagination, filters, sorter) => {
//     setTableParams({
//       ...tableParams,
//       pagination,
//     });

//     // `dataSource` is useless since `pageSize` changed
//     if (pagination.pageSize !== tableParams.pagination?.pageSize) {
//       setData([]);
//     }
//   };

//   const handleSearch = (value) => {
//     setTableParams({
//       ...tableParams,
//       search: value,
//     });
//   };

//   const handleNextPage = () => {
//     setTableParams({
//       ...tableParams,
//       pagination: {
//         ...tableParams.pagination,
//         current: tableParams.pagination.current + 1,
//       },
//     });
//   };

//   const handlePrevPage = () => {
//     setTableParams({
//       ...tableParams,
//       pagination: {
//         ...tableParams.pagination,
//         current: tableParams.pagination.current - 1,
//       },
//     });
//   };

//   useEffect(() => {
//     getData();
//   }, [JSON.stringify(tableParams), month]);

//   return (
//     <>
//       <Search
//         placeholder="Search"
//         allowClear
//         onSearch={handleSearch}
//         style={{
//           width: 400,
//           padding: "15px 0px",
//         }}
//       />

//       <Table
//         columns={columns}
//         rowKey={(record) => record.id}
//         dataSource={data}
//         pagination={false} // Disable default pagination
//         loading={loading}
//         onChange={handleTableChange}
//         size="small"
//         bordered
//         title={() => <strong>Transactions for {monthText}</strong>}
//         scroll={{ y: 540 }}
//       />

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           padding: "10px 0",
//         }}
//       >
//         <Button
//           onClick={handlePrevPage}
//           disabled={tableParams.pagination.current === 1}
//         >
//           Prev Page
//         </Button>
//         <span>Page {tableParams.pagination.current}</span>
//         <Button
//           onClick={handleNextPage}
//           disabled={
//             tableParams.pagination.current * tableParams.pagination.pageSize >=
//             tableParams.pagination.total
//           }
//         >
//           Next Page
//         </Button>
//       </div>
//     </>
//   );
// }

// export default Transactions;

// Third Change

import React, { useEffect, useState } from "react";
import moment from "moment";
import { Table, Input, message, Image, Button } from "antd";
import axios from "axios";

const { Search } = Input;
const columns = [
  {
    title: "Id",
    dataIndex: "id",
    width: "40px",
  },
  {
    title: "Title",
    dataIndex: "title",
    width: "200px",
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) => parseFloat(price).toFixed(2),
    width: "80px",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Category",
    dataIndex: "category",
    width: "120px",
  },
  {
    title: "Sold",
    dataIndex: "sold",
    render: (sold) => (sold ? "Yes" : "No"),
    width: "50px",
  },
  {
    title: "Date",
    dataIndex: "dateOfSale",
    render: (date) => moment(date).format("DD MMM YYYY"),
    width: "100px",
  },
  {
    title: "Image",
    dataIndex: "image",
    render: (url) => <Image src={url} alt="Product Image" />,
    width: "80px",
  },
];

function Transactions({ month, monthText }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    search: "",
  });

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://roxiler-pvpf.onrender.com/transactions`,
        {
          params: {
            month,
            page: tableParams.pagination.current,
            limit: tableParams.pagination.pageSize,
            search: tableParams.search,
          },
        }
      );

      setData(data.transactions);
      setLoading(false);
      setTableParams((prev) => ({
        ...prev,
        pagination: {
          ...prev.pagination,
          total: data.totalCount,
        },
      }));
      message.success("Data loaded successfully");
    } catch (error) {
      console.log(error);
      message.error("Error loading data");
      setLoading(false);
    }
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams((prev) => ({
      ...prev,
      pagination,
    }));

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const handleSearch = (value) => {
    setTableParams((prev) => ({
      ...prev,
      search: value,
      pagination: {
        ...prev.pagination,
        current: 1, // Reset to first page on search
      },
    }));
  };

  const handleNextPage = () => {
    setTableParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: prev.pagination.current + 1,
      },
    }));
  };

  const handlePrevPage = () => {
    setTableParams((prev) => ({
      ...prev,
      pagination: {
        ...prev.pagination,
        current: prev.pagination.current - 1,
      },
    }));
  };

  useEffect(() => {
    getData();
  }, [tableParams.pagination.current, tableParams.search, month]);

  return (
    <>
      <Search
        placeholder="Search"
        allowClear
        onSearch={handleSearch}
        style={{
          width: 400,
          padding: "15px 0px",
        }}
      />

      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={false} // Disable default pagination
        loading={loading}
        onChange={handleTableChange}
        size="small"
        bordered
        title={() => <strong>Transactions for {monthText}</strong>}
        scroll={{ y: 540 }}
      />

      <div
        style={{
          display: "flex",
          color: "black",
          justifyContent: "space-around",
          padding: "10px 0",
        }}
      >
        <Button
          style={{
            color: "white",
            background: "black",
          }}
          onClick={handlePrevPage}
          disabled={tableParams.pagination.current === 1}
        >
          Prev Page
        </Button>
        <span>Page {tableParams.pagination.current}</span>
        <Button
          style={{
            color: "white",
            background: "black",
          }}
          onClick={handleNextPage}
          //   disabled={
          //     tableParams.pagination.current * tableParams.pagination.pageSize >=
          //     tableParams.pagination.total
          //   }
        >
          Next Page
        </Button>
      </div>
    </>
  );
}

export default Transactions;

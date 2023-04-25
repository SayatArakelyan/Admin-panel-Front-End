import { Avatar,  Space, Table, Typography } from "antd";
import { useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchCustomers} from "../../redux/reducers/customers/actions";

function Customers() {
    const {loading, data: dataSourced} = useSelector(state => state.customers)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCustomers());

    }, []);





  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
              key:"id",
            render: (image) => {
              return <Avatar src={`http://localhost:4444/${image}`} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "FirstName",
              key:"id"
          },
          {
            title: "LastName",
            dataIndex: "LastName",
              key:"id"
          },
          {
            title: "Email",
            dataIndex: "username",
              key:"id"
          },


        ]}
        dataSource={dataSourced}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;

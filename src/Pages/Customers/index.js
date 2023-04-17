import { Avatar,  Space, Table, Typography } from "antd";
import { useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {fetchCustomers} from "../../redux/reducers/customers/actions";

function Customers() {
    const {loading, data: dataSource} = useSelector(state => state.customers)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCustomers());

    }, []);

    console.log(dataSource)



  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "FirstName",
          },
          {
            title: "LastName",
            dataIndex: "LastName",
          },
          {
            title: "Email",
            dataIndex: "username",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },


        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
      ></Table>
    </Space>
  );
}
export default Customers;

import {BellFilled, MailOutlined} from "@ant-design/icons";
import {Badge, Button, Drawer, Image, List, Space, Typography} from "antd";
import {useEffect, useState} from "react";
import {getComments, getOrders} from "../../../../admin-panel/src/API/index";
import logo from "../../img/logo.png"
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../redux/reducers/Auth/authActions";
import {useNavigate} from "react-router-dom";

function AppHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const [comments, setComments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [commentsOpen, setCommentsOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const handleSignOut = () => {
        dispatch(signOut()).then(() => {
            navigate('/login')
        })
    }

    useEffect(() => {
        getComments().then((res) => {
            setComments(res.comments);
        });
        getOrders().then((res) => {
            setOrders(res.products);
        });
    }, []);

    return (
        <div className="AppHeader">
            <Image
                width={60}
                src={logo}
            ></Image>
            <Typography.Title>Clothing Industry Dashboard</Typography.Title>
            <Space>
                <Badge count={comments.length} dot>
                    <MailOutlined
                        style={{fontSize: 24}}
                        onClick={() => {
                            setCommentsOpen(true);
                        }}
                    />
                </Badge>
                <Badge count={orders.length}>
                    <BellFilled
                        style={{fontSize: 24}}
                        onClick={() => {
                            setNotificationsOpen(true);
                        }}
                    />
                </Badge>
            </Space>
            <Drawer
                title="Comments"
                open={commentsOpen}
                onClose={() => {
                    setCommentsOpen(false);
                }}
                maskClosable
            >
                <List
                    dataSource={comments}
                    renderItem={(item) => {
                        return <List.Item>{item.body}</List.Item>;
                    }}
                ></List>
            </Drawer>
            <Drawer
                title="Notifications"
                open={notificationsOpen}
                onClose={() => {
                    setNotificationsOpen(false);
                }}
                maskClosable
            >
                <List
                    dataSource={orders}
                    renderItem={(item) => {
                        return (
                            <List.Item>
                                <Typography.Text strong>{item.title}</Typography.Text> has been
                                ordered!
                            </List.Item>
                        );
                    }}
                ></List>
            </Drawer>

            {isAuthenticated && (
                <Button onClick={handleSignOut}>
                    Log Out
                </Button>
            )}
        </div>
    );
}

export default AppHeader;

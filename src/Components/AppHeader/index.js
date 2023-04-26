import {Button, Image, Typography,} from "antd";


import logo from "../../img/logo.png"
import {useDispatch, useSelector} from "react-redux";
import {signOut} from "../../redux/reducers/Auth/authActions";
import {useNavigate} from "react-router-dom";

function AppHeader() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {Title} = Typography;

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const auth = useSelector(state => state.auth);




    const handleSignOut = () => {
        dispatch(signOut()).then(() => {
            navigate('/login')
        })
    }


    return (
        <div className="AppHeader">
            <Image
                width={60}
                src={logo}
            ></Image>
            <Typography.Title>Clothing Industry Dashboard</Typography.Title>


            {isAuthenticated && (
                <>

                    <Title level={5}>{auth.user.name}</Title>
                    <Button onClick={handleSignOut}>
                        Log Out
                    </Button>
                </>
            )}
        </div>
    );
}

export default AppHeader;

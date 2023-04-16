import "./App.css";
import AppFooter from "../../admin-panel/src/Components/AppFooter";
import AppHeader from "../../admin-panel/src/Components/AppHeader";
import PageContent from "../../admin-panel/src/Components/PageContent";
import SideMenu from "../../admin-panel/src/Components/SideMenu";

function App() {
    return (
        <div className="App">
            <AppHeader />
            <div className="SideMenuAndPageContent">
                <SideMenu></SideMenu>
                <PageContent></PageContent>
            </div>
            <AppFooter />
        </div>
    );
}
export default App;

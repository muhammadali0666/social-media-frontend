import Feed from "../../components/Feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/sideBar";
import TopBar from "../../components/TopBar/TopBar";
import "./home.css"



function Home() {
    return (
      <>
         <TopBar/>
         <div className="homeContainer">
            <SideBar/>
            <Feed/>
            <RightBar/>
         </div>
         
      </>
    )
  }
  
  export default Home;
  
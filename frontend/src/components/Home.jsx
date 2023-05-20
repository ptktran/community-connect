import NavBar from "./Navbar";
import MiniPost from "./post/MiniPost";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";
const Home = () => {
    return (
        <div>
            <NavBar />
            <LoginButton />
            <LogoutButton />
            <Profile />
            <MiniPost />
        </div>
    )
}

export default Home;
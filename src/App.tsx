import { Login } from "./components/DIP/form";
import { ShowNotifications } from "./components/OCP";
import { UserProfileContainer } from "./components/SRP/userProfileContainer";

function App() {
  return (
    <>
      <Login />
      <UserProfileContainer />
      <ShowNotifications />
    </>
  );
}

export default App;

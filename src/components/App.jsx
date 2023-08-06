import data from "../data.json"
import { GlobalStyled } from "./GlobalStyled";
import { Profile } from "./Profile/Profile";

export const App = () => {
  return (
    <div>
      <Profile data={data} />
      <GlobalStyled/>
    </div>
  );
};

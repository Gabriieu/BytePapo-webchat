import { HeaderStyle } from "./header.style";
import logo from "../../assets/logo-phrase-byte-papo-complete-upscaled.png";
import { useContext } from "react";
import { MainContext } from "../../provider/main-provider";

export const Header = () => {
  const { user, logout, token } = useContext(MainContext);

  return (
    <HeaderStyle>
      <div>
        <img src={logo} alt="" />
      </div>
      {user || token ? <button onClick={logout}>Logout</button> : null}
    </HeaderStyle>
  );
};

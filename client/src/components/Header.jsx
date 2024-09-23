import Clock from "./Clock";
import StatusBar from "./StatusBar";

const Header = ({ $readonly }) => {
  return (
    <header>
      <Clock />
      <StatusBar $readonly={$readonly} />
    </header>
  );
};
export default Header;

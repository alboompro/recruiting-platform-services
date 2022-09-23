import AllCoffees from '../../mocks/coffees';

import "./Header.css";

const Header = () => {

  console.log(listCoffees())

  return (
    <>
      <header className="headerContainer">
        <img src="../../images/coffee.svg" alt="Logo Coffee" />
        <div>
          <h1>{CardLogin.nome}</h1>
          <span>By Alboom</span>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;

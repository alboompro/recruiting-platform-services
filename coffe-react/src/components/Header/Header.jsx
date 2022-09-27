import "./Header.css";

const Header = () => {
  return (
    <section>
      <div className="headerContainer">
        <figure>
          <img src="../../../images/coffee.svg" alt="" />
        </figure>
        <div className="infoHeaderContainer">
          <div className="titleContainer">
            <h1>Smart Coffee</h1>
          </div>
          <div className="spanContainer">
            <span>By Alboom</span>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Header;

function Image(props) {
  console.log(props);
  return (
    <div className="carousel-item active">
      <img className="hero-img-tag" src={props.image} alt="img" />
    </div>
  );
}
function Header(props) {
  //console.log(props.images);
  return (
    <header className="container-fluid main-header">
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Manhwa</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contents</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More...
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="row img-carosul">
        <div className="row col-lg-4 hero-content card position-relative">
          <div className="col hero-card-body">
            <h5 className="card-title hero-card-title">Solo Leveling</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Most Popular Manhwa
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="d-flex flex-md-row flex-lg-column rise-pos">
            <div className="rise-property">R</div>
            <div className="rise-property">I</div>
            <div className="rise-property">S</div>
            <div className="rise-property">E</div>
          </div>
        </div>
        <div className="col-lg-8 carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {props.images.map((imageEle, index) => {
              return <Image key={index.toString()} image={imageEle} />;
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

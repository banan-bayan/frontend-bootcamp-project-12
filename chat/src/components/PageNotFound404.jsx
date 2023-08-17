
const PageNotFound = () => (
  <>
    <h1 style={{ background: 'red' }}>Page NOT FOUND</h1>
    <div>
      <a href="/">на главную страницу</a>
      <div className="container">
        <a className="navbar-brand" href="/">Hexlet Chat</a>
        <button type="button" className="btn btn-primary">Выйти</button>
      </div>
    </div>
  </>
);

export default PageNotFound;

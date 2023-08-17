import Header from '../header/Header';

const PageNotFound = () => (
  <>
    <Header />
    <h1 style={{ background: 'red' }}>Page NOT FOUND</h1>
    <div>
      <a href="/">на главную страницу</a>
    </div>
  </>
);

export default PageNotFound;

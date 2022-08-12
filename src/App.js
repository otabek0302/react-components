import './App.css';
import HeaderBlog from './Components/Head/HeaderBlog';
import ContentBlog from './Components/Content/ContentBlog';
function App() {
  return (
    <main>
      <div className='container'>
        <HeaderBlog title={'Get the lastes new, articles and stories fromGigy'} />
        <ContentBlog />
      </div>
    </main>
  );
}

export default App;


import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";

export default function Home() {
  return (
    <div className="max-w-full w-full bg-white overflow-hidden">
      <Header/>
      <MainContent/>
      <Footer/>
      
    </div>
  );
}

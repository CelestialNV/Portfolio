import './App.css';
import 'tw-elements';
import Header from './components/Header'
import Navbar from './components/Navbar'
import HomeCard from './components/HomeCard'
import Middle from './sections/Middle'
import Myers from './sections/Myers';
import Strenghts from './sections/Strenghts';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className=''>
    <Header/>
    <Navbar/>
    <HomeCard/>
    <Middle/>
    <Myers/>
    <Strenghts/>
    <Experience/>
    <Contact/>
    </div>
  );
}

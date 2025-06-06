import Header from './Header';
import Footer from './Footer';
import HeroContent from './HeroContent';
import HeroContent2 from './HeroContent2';
import Content3 from './Content3';
import HeroContent4 from './HeroContent4';
import ProjectsSection from './ProjectsSection';
import ClientsSection from './ClientsSection';

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow max-w">
                <HeroContent/>
                <HeroContent2/>
                <Content3/>
                <HeroContent4/>
                <ProjectsSection/>
                <ClientsSection/>
            </main>
        
            <Footer />
        </div>
    );
}

export default App;

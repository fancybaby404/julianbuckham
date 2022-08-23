import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home'
import authorData from './data/sidebarData.jsx'

const data = authorData[0]


export default function App() {
    return (
        <div className="app flex h-full">
            <Sidebar
                name={data.name}
                description={data.description}
                socials={data.socials}
            />

            <Home />
        </div>
    )
}


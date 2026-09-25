import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from './routes.js'

// Pages
import { Home } from './pages/Home.jsx'
import { Cases } from './pages/Cases.jsx'
import { CasePage } from './pages/CasePage.jsx'
import { About } from './pages/About.jsx'
import { Archive } from './pages/Archive.jsx'
import { Contact } from './pages/Contact.jsx'
import { NotFound } from './pages/NotFound.jsx'

export default function App() {
    return (
        <Routes>
            <Route path={routes.root.path} element={<Home />} />
            <Route path={routes.cases.path} element={<Cases />} />
            <Route path={routes.caseItem.path} element={<CasePage />} />
            <Route path={routes.about.path} element={<About />} />
            <Route path={routes.archive.path} element={<Archive />} />
            <Route path={routes.contact.path} element={<Contact />} />
            <Route path={routes.notFound.path} element={<NotFound />} />
            <Route path="*" element={<Navigate to={routes.notFound.path} replace />} />
        </Routes>
    )
}

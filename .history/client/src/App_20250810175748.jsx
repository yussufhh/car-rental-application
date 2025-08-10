
const App = () => {
const [showLogin, setShowLogin] = useState(false)
const isOwnerPath = useLocation().pathname.startsWith('/owner')
return (
)
{!isOwnerPath && <Navbar setShowLogin={setShowLogin}/>}
<Routes>
<Route path='/' element={<Home/>}/> </Routes>
<1>
I
export default App
]
]
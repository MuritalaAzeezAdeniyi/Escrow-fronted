import SignUp from '../componet/signUp'
import Complain from '../componet/complain'
import LandingPage from '../componet/landpage'



const ROUTEST = [
    {
        path: '/',
        element: <LandingPage/>
    },
    {
        path: '/signUp',
        element: <SignUp/>
    },
    {
        path: '/complain',
        element: <Complain/>
    }

]
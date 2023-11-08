import {v4 as uuidv4} from 'uuid'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
// import Post from './components/Post'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    return  (

        <Router>
           <FeedbackProvider>
           <Header />
           <div className='container'>
           {/* <Routes> */}
               <Route exact path='/'>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
               </Route>
               <Route path='/about'>
                    <AboutPage />
                </Route>
                {/* <Route path='/post/*' element={<Post />} /> */}
           {/* </Routes> */}
           <AboutIconLink />
           </div>
        </FeedbackProvider>
        </Router>

        // <FeedbackProvider>
        // <Router>
        // <Header />
        // <div className='container'>
        //     <Route path='/about' component = {AboutPage} />
        //     <FeedbackForm handleAdd = {addFeedback}/>
        //     <FeedbackStats feedback = {feedback} />
        //     <FeedbackList feedback = {feedback}
        //     handleDelete = {deleteFeedback} />
        //     <p> {body} </p>

        // {showComments && commentBlock}

        // </div>
        // </Router>
        // </FeedbackProvider>


    )

}

export default App
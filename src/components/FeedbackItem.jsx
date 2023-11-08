// import {useState} from 'react'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {

    // const[rating, setRating] = useState(7)
    // const[text, setText] = useState('This is an example of a feedback item.')
    // const handleClick = () => {
    
    //     setRating( () => {
        
    //         return 10

    //         }
        
    //     )

    // }

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext) 

    return (

        <Card>

            <div className = "num-display"> {item.rating} </div>
            <button onClick = {() => deleteFeedback(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className='edit'> 
                <FaEdit color='purple'/>
            </button>
            <div className = "text-display"> {item.text} </div>
        </Card>

    )

}

export default FeedbackItem
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import UserContext from '../../../contexts/UserContext/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
function EditProfile() {
    let navigate = useNavigate();
    let {user, editUserInfo} = useContext(UserContext);
    let [userCredential, setUserCredentials] = useState({username:user.username, email:user.email, name:user.name, funds:{availableCash: user.funds.availableCash}, remarks:""});
    let handleOnChange = (event)=>{
        let {name, value} = event.target;
        // if(name==="availableCash"){
        //     setUserCredentials(prev=>{
        //         return {...prev,
        //             funds:{
        //                 availableCash:value
        //             }
        //         }
        //     })
        //     return;

        // }
        setUserCredentials(prev=>{
            return {...prev, [name]:value}
        })
    }

    let handleOnSubmit = (event)=>{
        event.preventDefault();
        editUserInfo(userCredential);
        navigate('/userprofile')

    }
    return ( 
    <div className="container">
        <div className='d-flex  gap-2 align-items-center'>

        <span>
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
        </span>
        <h1 className="font-300 d-inline">Edit Profile</h1>
        </div>
        <form className='p-3' onSubmit={handleOnSubmit}>

            <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={userCredential.email} onChange={handleOnChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Username</label>
                <input class="form-control" id="exampleFormControlTextarea1" name="username" rows="3" value={userCredential.username} onChange={handleOnChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                <input class="form-control" id="exampleFormControlTextarea1" rows="3" name='name' value={userCredential.name} onChange={handleOnChange}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Funds (in &#8377; )</label>
                <input type="number" class="form-control" id="exampleFormControlTextarea1" rows="3" name='availableCash' value={userCredential.funds.availableCash} disabled></input>
            </div>
            <button type='submit' className='btn btn-outline-success'>Submit</button>
        </form>
        <Link to={"/userprofile"} class="btn btn-outline-primary mt-3"><ArrowBackIosIcon></ArrowBackIosIcon> Profile</Link>
    </div> );
}

export default EditProfile;
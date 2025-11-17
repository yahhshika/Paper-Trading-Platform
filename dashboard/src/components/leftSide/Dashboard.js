import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

function Dashboard() {
    return ( <div className="container p-3">
        <h4 className="font-300">Hi, user !</h4>
        <hr></hr>
        <div className="">
            <h5 className="font-300 pt-4 d-flex align-items-center gap-2"> <InfoOutlineIcon></InfoOutlineIcon> Equity</h5>

        </div>
        <div className='row pt-3 ps-5'>
            <div className='col-3 border-end'><h3 className='font-300'>3.74k</h3><span className='font-200'>Margin Available</span></div>
            <div className='col-9'>
                <p className='m-0 font-300'>Margin used: <span>0</span></p>
                <p className='m-0 font-300'>Opening balance <span>3.74k</span></p>
            </div>
        </div>
        <hr className='my-4'></hr>
        <div className="">
            <h5 className="font-300 pt-4 -flex align-items-center gap-2"><WorkOutlineIcon/> Holdings</h5>

        </div>
        <div className='row pt-3 ps-5'>
            <div className='col-3 border-end'><h3 className='font-300'>3.74k <span className='fs-6'>+5.20%</span></h3><span className='font-200'>P&L</span></div>
            <div className='col-9'>
                <p className='m-0 font-300'>Current value: <span>31.43K</span></p>
                <p className='m-0 font-300'>Investment: <span>29.88k</span></p>
            </div>
        </div>
        <hr className='my-4'></hr>
    </div> );
}

export default Dashboard;
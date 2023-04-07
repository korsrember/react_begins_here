import   {useState,useRef} from 'react';
import WeatherWidget from './WeatherWidgetFunction';
function WeatherApp(){
    const [location,setLocation]=useState('');
    const locationInput=useRef(null);

    function handleClick(e){
        e.preventDefault();
        
        setLocation(locationInput.current.value);
    }
    return(
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div style={{ width:`20rem` }}>
                    <form className='row g-3'>
                        <div className='col-auto'>
                            <input
                            type='text'
                            className='form-control'
                            ref={locationInput}
                            />
                        </div>
                        <div className='col-auto'>
                            <button
                            className='btn btn-primary mb-3'
                            onClick={handleClick}
                            >
                                Get
                            </button>
                        </div>
                    </form>
                    <WeatherWidget location={location}/>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;
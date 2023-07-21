import React from 'react'
import Photo from './Photo';
import Test from './Test';

function Top() {
  return (
    <div  className='Container-fluid '>
        <div className='row'>
            <div className='col-sm-1'></div>
            <div className='col-sm-10 homes'>
                <div className='row m-3'>
                    <div className='col-sm-4'>
                        <h5 className='mt-3'>Be Expert in Top Technologies</h5><br/>
                        <p style={{textAlign:"justify"}}>Our experts are here to boost your technology skills in different areas. We ensure to provide you top learning experience with our training program which would accelerate your placement opportunities.</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5 className='mt-3'>Guidance by Top Industry Leaders
</h5><br/>
<p style={{textAlign:"justify"}}>Apart from regular technology trainings, we provide regular connects with Top Industry leaders who will coach you for your career path and placement. We ensure that you get best out of their experience.

</p>
                    </div>
                    <div className='col-sm-4'>
                        <h5 className='mt-3'>Assignment based, Active Learning
</h5>
    <p style={{textAlign:"justify"}}></p>      It's Active Training program where you will get work assignments to work and deliver in given time frame. It will give you real time working experience as like an IT company.

</div>
                </div>
                <p className='mt-3 rog'>TOP TECHNOLOGIES
</p>
 <Photo/>
 <p className='mt-3 rog'>FROM OUR EXPERTS</p>
 <Test/>
                </div>    
             <div className='col-sm-1'></div>
        </div>
        </div>
  )
}

export default Top;
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import SampleImage from '../../assets/sample.jpg'
function Row({title}){
    return(
        <div className="row h-36 w-[90%] flex flex-col gap-5">
            <div className="head">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
            </div>
            <div className="cards px-4">
                <div className="crd overflow-auto flex gap-2 ">
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                    <img src={SampleImage} alt="" className='w-44' />
                </div>
            </div>
        </div>
    )
}
export default Row;
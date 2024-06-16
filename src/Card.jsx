import sample_pic from './assets/sample_picture.png'
function Card()
{
     return (
         <div className='card'>
                 <img className="card-image" src= {sample_pic} alt="profile picture" />
                <h2 className='card-title'>Tekken</h2>
                <p className ='card-text'>I am the chill guy</p>
         </div>
     );
}
export default Card
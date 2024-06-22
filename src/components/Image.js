export default function Listing( { alt, img }) {

  
 


return (
	<div className="listing">
        <div className="listing--image">
            <img 
                src={`./images/${img}`}
                alt={alt} />
        </div>
    <div className="listing--description">
        <p>{alt}</p>
    </div>
    </div>
  )
}
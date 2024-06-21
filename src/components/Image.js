export default function Listing( { alt, img }) {

  
 


return (
	<div className="listing">
	 <picture>
        <img 
        src={`./images/${img}`}
        alt={alt} />
     </picture>
     <p>{alt}</p>
	 </div>
  )
}
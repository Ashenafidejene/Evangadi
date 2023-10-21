import React,{useEffect,useState} from 'react'
import "../../css/bootstrap.css"
import "./interviwer.css"
const Interviwe = () => {
    const [youtubeVideo, setVideo] = useState([]);
    useEffect(()=>{
     fetch("/Youtube.json").then((response)=>response.json())
                            .then((data)=>{
                                setVideo(data.items)
                            })
                            .catch((error) => {
                                console.error("Error fetching data:", error);
                         });
    },[])
    let  isEvenIndex = 1 ;
    return (
        <div className="allVideosWrapper">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="titleNames">
          Interview with Evangadi <br/> Students
        </h2>
        <h4>Messages from our students</h4>
        <p className='pod'><center>If you are a beginner and want to hear from students who were in the same place that you are now just a couple of months ago, please listen to these interviews.</center></p>
        <div className="row">
          {youtubeVideo?.map((singleVideo, i) => (
            <div key={i} className={`col-sm-6 col-md-6  ${i % 2 === 0 ? "text-right" : ""}`}>
              <a href={singleVideo.url} target="_blank" rel="noopener noreferrer">
                <img className="image-v" src={singleVideo.image} alt="video thumbnail" />
              </a>
              <a className="V-title " href={singleVideo.url} target="_blank" rel="noopener noreferrer">
                <h4 className="V-title">{singleVideo.title}</h4>   
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
      );

}

export default Interviwe;
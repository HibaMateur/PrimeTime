import "./stylez.css"
function CourseCard(course){

   
    return( 
        

        <div className="card m-3">

        <div className="imgBox">
          <img src="https://wac-cdn.atlassian.com/fr/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=309" alt="mouse corsair" class="mouse"/>
        </div>
      
        <div className="contentBox">
          <h3>{course.course.name}</h3>
          <h2 className="price">{course.course.type}</h2>
          <a href="#" className="buy">Buy Now</a>
        </div>
      
      </div>)
}

export default CourseCard;
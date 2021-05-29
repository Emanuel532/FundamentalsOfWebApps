const Header = ({ name }) => {
    return (
      <h1>{name}</h1>
    )
  }
  
const Total = ({ parts }) => {
    const sum = parts.reduce( (accumulator, currentvalue) => accumulator + currentvalue.exercises, 0 );
    return(
      <strong><p>Number of exercises {sum}</p></strong>
    ) 
  }
const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
const Content = ({ parts }) => {
    return (
      <div>
        {
        parts.map(parts => 
          <Part key={parts.id} part={parts} />  
        )}
      </div>
    )
  }
  
const Courses = ({courses}) => {
    return (
      <div>
        {
        courses.map(course => 
        
        <div>
          <Header name= {course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>  
        )}
      </div>
    )
}

export default Courses;
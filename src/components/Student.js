import React, {Component} from 'react'; //import React from library

class Student extends Component {  // create a class

render(){
  const studentName = this.props.studentData.name;
  const studentAge = this.props.studentData.age;
  const studentEmail = this.props.studentData.email;
  return(
    <article>
      <h3> {this.props.studentData.name}</h3>
      <p> Age: {studentAge}</p>
      <p>email: {studentEmail}</p>
    </article>
    );
  }
}

export default Student;   // needs to be in any file to import this class in that file, so by default they get the Student class

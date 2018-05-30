import React, {Component} from 'react'; //import React from library
import './Student.css';
import PropTypes from 'prop-types';

class Student extends Component {  // create a class
  constructor(props) {
    super(props);

    this.state = {
      isPresent: true,
      name: props.name,
    };
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    present: PropTypes.bool,
  };

  isTopStudent = () => {
    if (this.props.name === 'Mi') {
      return 'top-student';
    }
    return 'student';
  };

  onToggleButton =() => {
    const isPresent = !this.state.isPresent;
    this.setState({
      isPresent,
    });
  };

  onNameChange =(event) => {
    console.log(event.target.value);
    console.log(this.props.name);
    //   const name = event.target.value;
    //   this.setState({
    //     name,
    //   });


    this.setState({
      name: event.target.value,
    })
  };

  render() {

    const studentName = this.props.studentData.name;
    const studentAge = this.props.studentData.age;
    const studentEmail = this.props.studentData.email;

    return (
      <article className={ this.props.studentData.name === 'Mi' ? 'top-student' : 'student'}>
      <h3> {this.state.name}</h3>
      <input onChange={ this.onNameChange }
      type="text"
      name="name"/>
      <h4> { this.state.isPresent ? "In class": "Absent" }</h4>
      <p> Age: {studentAge}</p>
      <p>email: {studentEmail}</p>
      <button onClick={ this.onToggleButton }>
      Toggle Present
      </button>
      </article>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
};

export default Student;   // needs to be in any file to import this class in that file, so by default they get the Student class

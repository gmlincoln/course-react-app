import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from '../Course/Course';


const Courses = ({ handleAddCourse }) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6 px-2 lg:px-0">
                {
                    courses.map(course => <Course key={course.id} course={course} handleAddCourse={handleAddCourse}></Course>)
                }
            </div>
        </>
    );
};


Courses.propTypes = {
    handleAddCourse: PropTypes.func.isRequired,
};


export default Courses;

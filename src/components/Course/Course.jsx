import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { GoBook } from 'react-icons/go';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = ({ course, handleAddCourse }) => {
    const { cover, title, short_description, price, credit_hour } = course;
    return (
        <>
            <div className="shadow-lg bg-white rounded-lg p-4 space-y-4">
                <img src={cover} alt="" />
                <h3 className="text-[#1C1B1B] font-semibold ">{title}</h3>
                <p className="text-[rgba(28,27,27,0.60)] text-sm font-normal">{short_description}</p>
                <span className="flex justify-between text-[rgba(28,27,27,0.60)] font-medium items-center">
                    <FiDollarSign></FiDollarSign> <p>Price : {price}</p>
                    <GoBook></GoBook><p>Credit : {credit_hour}hr</p>
                </span>
                <button onClick={() => handleAddCourse(course)} className="bg-blue-800 text-white w-full p-2 rounded-lg font-semibold">Select</button>
                <ToastContainer></ToastContainer>
            </div>

        </>




    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleAddCourse: PropTypes.func.isRequired,
};


export default Course;

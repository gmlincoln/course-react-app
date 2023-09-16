import PropTypes from 'prop-types';


const AddCourses = ({ addCourses, remainingHour, totalHour, coursePrice }) => {

    return (
        <div className="lg:w-1/3">
            <div className="shadow-lg p-6 space-y-6 rounded-lg">
                <h3 className="text-[#2F80ED] border-b-2 py-2 font-bold">Credit Hour Remaining {remainingHour} hr</h3>


                <div className="] border-b-2 py-2 space-y-6">
                    <h2 className="font-bold text-lg">Course Name</h2>

                    <ol className="rgba(28,27,27,0.60)] text-sm space-y-3 px-6">
                        {
                            addCourses.map(addCourse =>
                                <li className="list-decimal" key={addCourse.id} > {addCourse.title}</li>)
                        }
                    </ol>
                </div>
                <h5 className="text-sm font-medium text-[rgba(28,27,27,0.80)] border-b-2 py-2">
                    Total Credit Hour : {totalHour}
                </h5>
                <h5 className="text-sm font-semibold text-[rgba(28,27,27,0.80)]">Total Price : {coursePrice.toFixed(2)} USD</h5>
            </div>
        </div >
    );
};

AddCourses.propTypes = {
    addCourses: PropTypes.array.isRequired,
    remainingHour: PropTypes.number.isRequired,
    totalHour: PropTypes.number.isRequired,
    coursePrice: PropTypes.number.isRequired,

};

export default AddCourses;
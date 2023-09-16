import React from 'react';
import { useState } from 'react';
import './App.css'
import Courses from './components/Courses/Courses';
import AddCourses from './components/AddCourses/AddCourses';
import { toast } from 'react-toastify';


function App() {
  const [addCourses, setAddCourses] = useState([]);
  const [remainingHour, setRemainingHour] = useState(0);
  const [totalHour, setTotalHour] = useState(0);
  const [coursePrice, setCoursePrice] = useState(0);

  const handleAddCourse = course => {
    const isExist = addCourses.find(addCourse => addCourse.id == course.id);
    let totalCreditHour = course.credit_hour;
    let totalCoursePrice = course.price;

    if (isExist) {
      return toast(` ${course.title} is already added!`)
    }
    else {
      addCourses.forEach(addCourse => {
        totalCreditHour += addCourse.credit_hour;
        totalCoursePrice += addCourse.price;
      })
      const remainingCreditHour = 20 - totalCreditHour;


      if (totalCreditHour <= 20) {
        setCoursePrice(totalCoursePrice);
        setTotalHour(totalCreditHour);
        setRemainingHour(remainingCreditHour);
        setAddCourses([...addCourses, course]);
      }
      else {
        return toast('Your course hour cross the 20 credit!!')
      }
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-[#1C1B1B] font-bold text-center mt-12 mb-8">Course Registration</h2>

        <div className="md:flex gap-12">
          <Courses handleAddCourse={handleAddCourse}></Courses>
          <AddCourses
            addCourses={addCourses}
            remainingHour={remainingHour}
            totalHour={totalHour}
            coursePrice={coursePrice}
          ></AddCourses>
        </div>
      </div>

    </>
  )
}

export default App;

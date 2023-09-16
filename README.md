# Course Registration Application

This application build with React. We are using popular CSS framework named Tailwind CSS.

Now we are talking about the features of the application. Application features are given below:

- In this application, user can not add same course more than one time. This application allows user to add one course at a time.
- If user tried to add same course more than one time, it shows the React toast 'Introduction to Algorithms is already added!'.
- User can't take more than 20 hours as their credit hour.
- If user tried to add more course, it shows the react toast 'Your course hour cross the 20 Credit!!' .
- Remaining hour never shows negative number.

#### Project Discussion:

We are using useState hook in different different components for different different task. First we are taking about Courses component, here we are using useEffect hook to fetching json data and useState to setCourses to send props to Course Component.

Then we are using three different useState to show the data dynamically in add course cart. To calculate remaining time, total time, course price and to show the course the title in the add course cart, we are using useState hook in the parent component.

As we know React is unidirectional and it works downward, that's why we are using useState in the parent component.

[Live Site]('')

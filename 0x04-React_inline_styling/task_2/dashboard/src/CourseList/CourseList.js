import React from "react";
import CourseListRow from "./CourseListRow";
import PropTypes from "prop-types";
import CourseShape from "./CourseShape";
import "./CourseList.css"
import {StyleSheet, css} from "aphrodite";


// Aphrodite
const styles = StyleSheet.create({
    CourseList: {
        marginTop: '2em',
        width: '100%',
        border: '1px solid #ddd',
        fontSize: '1.2rem',
        marginBottom: '15em',
        border: "3px dotted red" // temp
    }

})

//React Component
const CourseList = ({listCourses}) => {
    return(
        <table className={css(styles.CourseList)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ? listCourses.map((course) => {
                    return(
                        <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                    )
                }) : <CourseListRow textFirstCell="No course available yet" isHeader={false} />
            }
            </tbody>
        </table>
    )
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
}



export default CourseList;
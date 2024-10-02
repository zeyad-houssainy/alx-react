import React from "react";
import PropTypes from "prop-types";

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const headerRowStyle = {
  backgroundColor: "#deb5b545"
};

// document.querySelector("th").style(headerRowStyle)

// CourseListRow component
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={isHeader ? headerRowStyle : rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

// define prop types
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

// set default props
CourseListRow.defaultProps = {
  isHeader: false,
};

export default CourseListRow;
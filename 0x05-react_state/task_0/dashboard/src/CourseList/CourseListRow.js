import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";



// aphrodite
const styles = StyleSheet.create({
  rowStyle: {
    backgroundColor: "#f5f5f5ab",
  },
  headerRowStyle: {
    backgroundColor: "#deb5b545",
  },
  th: {
    borderBottom: `1px solid #ddd`,
    color: "#01075c",
  },
  td: {
    width: "80%",
  },
  table: {
    marginLeft: "auto",
    marginRight: "auto",
  },

});


// first row is not being merged y3ne colSpan={2} is not working

// CourseListRow component
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={css(isHeader ? styles.headerRowStyle : styles.rowStyle)}>
      {isHeader ? (
        textSecondCell === null ? (
          // when having one header cell filled
          <th colSpan={2} className={css(styles.th)}>{textFirstCell}</th>
        ) : (
          // when having two header cells filled
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        // cell is not header
        <>
          <td className={css(styles.td)}>{textFirstCell}</td>
          <td className={css(styles.td)}>{textSecondCell}</td>
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
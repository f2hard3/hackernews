import React from "react";
import { Button } from "../Button";
import { SORTS, Sort } from "../Sort";
import PropTypes from "prop-types";
import { largeColumn, midColumn, smallColumn } from "../../constants";
import "./index.css";

export const Table = ({ list, sortKey, isSortReverse, onSort, onDismiss }) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse() : sortedList;

  return (
    <div className="table">
      <div className="table-header">
        <span style={largeColumn}>
          <Sort sortKey={"TITLE"} onSort={onSort}>
            Title
          </Sort>
        </span>
        <span style={midColumn}>
          <Sort sortKey={"AUTHOR"} onSort={onSort}>
            Author
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort sortKey={"COMMENTS"} onSort={onSort}>
            Comments
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort sortKey={"POINTS"} onSort={onSort}>
            Points
          </Sort>
        </span>
        <span style={smallColumn}>Archive</span>
      </div>
      {reverseSortedList.map(item => (
        <div key={item.objectID} className="table-row">
          <span style={largeColumn}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={midColumn}>{item.author}</span>
          <span style={smallColumn}>{item.num_comments}</span>
          <span style={smallColumn}>{item.points}</span>
          <span>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

const withError = Component => ({ error, ...rest }) =>
  error ? (
    <div className="interactions">
      <p>Something went wrong.</p>
    </div>
  ) : (
    <Component {...rest} />
  );

export const TableWithError = withError(Table);

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  sortKey: PropTypes.string.isRequired,
  isSortReverse: PropTypes.bool.isRequired,
  onSort: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired
};

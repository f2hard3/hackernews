import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { sortBy } from "lodash";
import { Button } from "../Button";
import classNames from "classnames";

export const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

export const Sort = ({ sortKey, onSort, activeSortKey, children }) => {
  const sortClass = classNames("button-inline", {
    "button-active": sortKey === activeSortKey
  });

  return (
    <Button onClick={() => onSort(sortKey)} className={sortClass}>
      {children}
    </Button>
  );
};
Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  activeSortKey: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

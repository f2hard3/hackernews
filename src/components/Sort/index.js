import React from "react";
import "./index.css";
import PropTypes from "prop-types";
import { sortBy } from "lodash";
import { Button } from "../Button";

export const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

export const Sort = ({ sortKey, onSort, children }) => (
  <Button onClick={() => onSort(sortKey)} className="button-inline">
    {children}
  </Button>
);

Sort.propTypes = {
  sortKey: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

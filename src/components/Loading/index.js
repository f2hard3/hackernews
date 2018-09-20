import React from "react";
import { Button } from "../Button";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";

const Loading = () => (
  <div>
    <i className="fa fa-spinner fa-spin" />
  </div>
);

const withLoading = Component => ({ isLoading, ...rest }) =>
  isLoading ? <Loading /> : <Component {...rest} />;

export const ButtonWithLoading = withLoading(Button);

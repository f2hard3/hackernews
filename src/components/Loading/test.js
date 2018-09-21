import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { ButtonWithLoading } from ".";

describe("ButtonWithLoading", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <ButtonWithLoading onClick={function() {}}>
        Give Me More
      </ButtonWithLoading>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(
      <ButtonWithLoading onClick={function() {}}>
        Give Me More
      </ButtonWithLoading>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

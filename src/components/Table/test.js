import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { TableWithError, Table } from ".";

Enzyme.configure({ adapter: new Adapter() });

describe("TableWithError", () => {
  const props = {
    error: false,
    list: [
      { title: "1", author: "1", num_comments: 1, points: 2, objectID: "y" },
      { title: "2", author: "2", num_comments: 1, points: 2, objectID: "z" }
    ],
    sortKey: "NONE",
    isSortReverse: false,
    onSort: function() {},
    onDismiss: function() {}
  };
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TableWithError {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("shows two items in list", () => {
    const element = shallow(<Table {...props} />);
    expect(element.find(".table-row").length).toBe(2);
  });

  test("has a valid snapshot", () => {
    const component = renderer.create(<TableWithError {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

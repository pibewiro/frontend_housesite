import React from "react";
import { Route } from "react-router-dom";
import BodyTemplate from "./BodyTemplate";

const index = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => (
          <BodyTemplate>
            <Component {...props} />
          </BodyTemplate>
        )}
      />
    </div>
  );
};

export default index;

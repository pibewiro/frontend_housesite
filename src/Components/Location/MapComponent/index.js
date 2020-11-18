import React, { Component } from "react";
import { connect } from "react-redux";
import { setViewPort } from "../../../Redux/map/actions";
import ReactMapGL, { Marker } from "react-map-gl";

class Index extends Component {
  render() {
    return (
      <>
        <ReactMapGL
          {...this.props.mapData.viewPort}
          width="100%"
          height="100%"
          mapStyle={process.env.REACT_APP_MAPSTYLE_URL}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={(viewport) => {
            this.props.setViewPort({ ...viewport });
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapData: state.map,
  };
};

export default connect(mapStateToProps, { setViewPort })(Index);

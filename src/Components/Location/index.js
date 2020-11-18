import React, { Component } from "react";
import { connect } from "react-redux";
import { setCoordinates } from "../../Redux/map/actions";
import Navbar from "../Template/Navbar";
import HouseMap from "./MapComponent";
import "./css/location.css";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      type: null,
      location: null,
      lon: null,
      lat: null,
      longitude: -117.321,
      latitude: 33.89,
    };
  }

  componentDidMount() {
    const { location } = this.props;
    this.setState({
      type: location.state.type,
      location: location.state.location,
    });
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  setInput = () => {
    let intlon = parseFloat(this.state.lon);
    let intlat = parseFloat(this.state.lat);

    this.props.setCoordinates({ longitude: intlon, latitude: intlat });
  };
  render() {
    return (
      <div>
        <Navbar />
        <h1 className="center-text">
          Location:{" "}
          {this.state.location !== "all" ? this.state.location : "All"}
        </h1>
        <p>Type: {this.state.type}</p>
        <p>Location: {this.state.location}</p>
        <p>Longitude: {this.state.longitude}</p>
        <p>latitude: {this.state.latitude}</p>

        <div>
          <label htmlFor="">Lon</label>
          <input
            type="text"
            className="site-input"
            name="lon"
            onChange={this.handleInput}
          />
          <label htmlFor="">Lat</label>
          <input
            type="text"
            className="site-input"
            name="lat"
            onChange={this.handleInput}
          />
          <button onClick={this.setInput}>Enter</button>
        </div>
        <div className="location">
          {this.state.loading === false ? (
            <div className="location-map">
              <HouseMap />
            </div>
          ) : (
            <h1>Loading...</h1>
          )}
          <div className="location-houses"></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapData: state.map,
  };
};

export default connect(mapStateToProps, { setCoordinates })(Index);

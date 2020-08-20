import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <span>TITLE : {location.state.title}</span>
          <span>YEAR : {location.state.year}</span>
          <ul className="detail__genres">
            {location.state.genres.map((genre, index) => {
              return (
                <li key={index} className="detail__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <span>SUMMARY : {location.state.summary}</span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;

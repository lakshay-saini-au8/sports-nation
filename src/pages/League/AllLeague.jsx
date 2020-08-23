import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAllLeague,
  setAllLeague,
} from "../../redux/actions/allLeagueAction";
import LeagueCard from "../../components/LeagueCard/LeagueCard";
import "./AllLeague.css";
import Logo from "../../components/Logo/Logo";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import NoData from "../../assets/img/noData.svg";

class AllLeague extends Component {
  componentDidMount() {
    if (
      this.props.match.params.sportName !== "" &&
      this.props.match.params.countryName !== ""
    ) {
      this.props.getAllLeague(
        this.props.match.params.sportName,
        this.props.match.params.countryName
      );
    }
  }
  componentWillUnmount() {
    this.props.setAllLeague("");
  }
  render() {
    return (
      <>
        <Logo />
        {this.props.fetchingLeague ? (
          <Loader />
        ) : this.props.allLeague === "" ? (
          <>
            Hye I think you are on wrong page.Go to{" "}
            <Link
              to="/"
              style={{
                background: "#fff",
                padding: "5px 10px",
                margin: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              GO TO HOME
            </Link>{" "}
          </>
        ) : this.props.allLeague === null ? (
          <div
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "calc(100vh - 80px)",
              flexDirection: "column",
            }}
          >
            Hye, Sorry we dont have any data as per you choice, either you can
            go back or
            <Link
              to="/"
              style={{
                background: "#fff",
                padding: "5px 10px",
                margin: "10px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              GO TO HOME
            </Link>
            <img
              src={NoData}
              alt=""
              style={{ width: "250px", paddingTop: "40px" }}
            />
          </div>
        ) : (
          <>
            <div className="LeagueHead">
              <p className="LeagueHead__sport">
                {this.props.match.params.sportName}
              </p>
              <p className="LeagueHead__country">
                {this.props.match.params.countryName}
              </p>
            </div>

            <div className="LeagueCard__Wapper">
              {this.props.allLeague.map((item) => (
                <LeagueCard
                  img={item.strBadge}
                  title={item.strLeague}
                  leagueID={item.idLeague}
                  key={item.idLeague}
                />
              ))}
            </div>
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allLeague: state.allLeagueState.allLeague,
    fetchingLeague: state.allLeagueState.fetchingLeague,
    sportName: state.userSelectionState.selectedSport,
    countryName: state.userSelectionState.selectedCountry,
  };
};

export default connect(mapStateToProps, { getAllLeague, setAllLeague })(
  AllLeague
);

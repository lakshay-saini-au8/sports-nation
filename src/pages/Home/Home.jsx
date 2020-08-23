import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllSports } from "../../redux/actions/allSportsAction";
import SportCard from "../../components/SportCard";
import { HomeWrapper, CenterLogo } from "./Home.style";
import {
  setSportsName,
  setCountryName,
} from "../../redux/actions/userSelectionAction";
import Logo from "../../components/Logo/Logo";
import Loader from "../../components/Loader/Loader";
class Home extends Component {
  componentDidMount() {
    this.props.getAllSports();
    this.props.setSportsName(null);
    this.props.setCountryName(null);
  }
  setSport = (e) => {
    if (e.target.textContent !== "") {
      this.props.setSportsName(e.target.textContent);
      this.props.history.push("/country");
    }
  };
  render() {
    return !this.props.allSports ? (
      <>
        <Logo />
        <Loader />
      </>
    ) : (
      <>
        <CenterLogo>
          <Logo />
        </CenterLogo>

        <HomeWrapper onClick={this.setSport}>
          {this.props.allSports.map((item) => (
            <SportCard data={item} key={item.idSport} />
          ))}
        </HomeWrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  allSports: state.allSportsState.allSports,
});

export default connect(mapStateToProps, {
  getAllSports,
  setCountryName,
  setSportsName,
})(Home);

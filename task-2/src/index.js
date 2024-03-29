import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { Helmet } from "react-helmet";
import LoaderComponent from "./loader";
import GridItem from "./grid-item";
import CustomButton from "./custom-button";
import ScrollToTop from "./scrollToTop";
import { Button, Navbar, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      page1: {}, // store json data of page 1
      page2: {}, // store json data of page 2
      isPage1DataLoaded: false, // true if page 1 data has been loaded
      isPage2DataLoaded: false, // true if page 2 data has been loaded
      isPage1Loading: false, // true if page 1 data is in loading state
      isPage2Loading: false, // true if page 2 data is in loading state
      pageIndex: 0, // index of page that is currently being viewed
    };

    this.pageNavButtonClick = this.pageNavButtonClick.bind(this); // binder for page navigation buttons
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async fetchData() {
    /* This method fetches data from the API */

    this.setState({
      isPage1Loading: true, // page 1 is in loading state
      isPage2Loading: true, // page 1 is in loading state
    });

    const apiUrlPage1 = "https://reqres.in/api/users?page=1"; // api for page 1 data
    const apiUrlPage2 = "https://reqres.in/api/users?page=2"; // api for page 2 data

    // fetch page 1 data
    await fetch(apiUrlPage1)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          page1: json, // store page 1 json data
          isPage1DataLoaded: true, // page 1 completely loaded
          isPage1Loading: false, // page 1 is not in loading state
        });
      });

    // fetch page 2 data
    await fetch(apiUrlPage2)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          page2: json, // store page 2 json data
          isPage2DataLoaded: true, // page 2 completely loaded
          isPage2Loading: false, // page 2 is not in loading state
        });
      });
  }

  pageNavButtonClick(name) {
    /* This function is called when page navigation buttons are clicked */

    this.scrollToTop();

    if (name === "1") {
      this.setState({
        pageIndex: 0,
      });
      this.fetchData();
    }
    if (name === "2") {
      this.setState({
        pageIndex: 1,
      });
      this.fetchData();
    }
  }

  render() {
    const {
      page1,
      page2,
      isPage1DataLoaded,
      isPage2DataLoaded,
      isPage1Loading,
      isPage2Loading,
      pageIndex,
    } = this.state;

    // set loading state true when any of the pages are in loading state
    const isLoading = isPage1Loading || isPage2Loading;

    // set page loaded state true when both the pages are loaded
    const isLoaded = isPage1DataLoaded && isPage2DataLoaded;

    let grids, pages, page_nav_buttons, currentPage, gridRow1, gridRow2;

    if (isLoading) {
      console.log("Fetching data, wait..");
    } else {
      if (isLoaded) {
        if (pageIndex === 0) {
          console.log("Page is 1");
          currentPage = page1.data;
        } else {
          console.log("Page is 2");
          currentPage = page2.data;
        } // store the page json data according to the one selected using buttons

        console.log(currentPage);

        grids = currentPage.map((item) => <GridItem person={item} />); // get the data display cards
        gridRow1 = grids.slice(0, 3);
        gridRow2 = grids.slice(3, 6);

        pages = parseInt(page1.total_pages);
        page_nav_buttons = Array(pages);
        for (let i = 0; i < pages; i++) {
          page_nav_buttons.push(
            <CustomButton
              name={String(i + 1)}
              clickHandler={this.pageNavButtonClick}
            />
          );
        }
      }
    }

    const classes = isLoaded ? "data-body show" : "data-body";

    console.log("Grids:", grids);

    return (
      <div className="App">
        <Helmet>
          <title>Clients</title>
        </Helmet>

        <Navbar className="navbar" variant="light" expand="lg">
          <Container>
            <Navbar.Brand href=".">TASK 2</Navbar.Brand>
            <Button onClick={() => this.fetchData()}>Get Users</Button>
          </Container>
        </Navbar>

        {/* {<LoaderComponent />} */}
        {isLoading && <LoaderComponent />}

        <div className={classes}>
          <div className="person-container">
            <Container>
              <Row>{gridRow1}</Row>
              <Row>{gridRow2}</Row>
            </Container>
          </div>
          {isLoaded && page_nav_buttons}
          {isLoaded && (
            <footer>
              <div class="attribution">
                Made with ❤ by
                <a href="https://github.com/charitra1022/" target="_blank">
                  {" "}
                  Charitra Agarwal
                </a>
              </div>
            </footer>
          )}
        </div>

        <ScrollToTop />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

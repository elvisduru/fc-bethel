import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "./Scenes/Home/Home";
import { About } from "./Scenes/About/About";
import { Partners } from "./Scenes/Partners/Partners";
import { Players } from "./Scenes/Players/Players";
import Gallery from "./Scenes/Gallery/Gallery";

import jimoh from "./images/players/jimoh.jpg";
import daniel from "./images/players/daniel.jpg";
import obinna from "./images/players/obinna.jpg";
import sodiq from "./images/players/sodiq.jpg";
import prince from "./images/players/prince.jpg";
import abel from "./images/players/abel.jpg";
import ibrahim from "./images/players/ibrahim.jpg";

import akpam from "./images/players/apkam.jpg";
import bless from "./images/players/bless.jpg";
import kehinde from "./images/players/kehinde.jpg";
import obiri from "./images/players/obiri.jpg";

import maclyn from "./images/players/maclyn.jpg";
import john from "./images/players/john.jpg";
import william from "./images/players/william.jpg";
import alaba from "./images/players/alaba.jpg";
import samuel from "./images/players/samuel.jpg";
import okechukwu from "./images/players/okechukwu.jpg";
import ebube from "./images/players/ebube.jpg";
import muhammed from "./images/players/muhammed.jpg";
import collins from "./images/players/collins.jpg";
import Contact from "./Scenes/Contact/Contact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: {
        staff: [
          {
            name: "Udoh Andy Benedict",
            position: null,
            bio: (
              <div>
                <p>
                  Udoh, a native of Nsit Ubium in Akwa Ibom State, Nigeria. A graduate of the National Institute for Sports (Advance Certificate in Coaching, Football) who has 9 years’ experience as a player in grassroots football, he started his career with Lucky Babes football club in 2001 to 2003; then moved to FC Bethel International where I played from 2003 to 2008, before joining Dowa FC Benin Republic from 2009 to 2010.
              </p>
                <p>
                  Started his Coaching Career with Yaba Queens FC Lagos in 2010 winning so many Laurels for the Club with Six years of stay. Some of the honors include but not limited to: Edwin Collins Women Football Championship winner, Oduduwa Cup Women Championship in Ibadan and the best coach of the championship, 2nd Eko Football Championship, 2nd Lagos State Female Football Challenge Cup, Winner Lagos State Female Football Challenge Cup, Winner Amateur Female Football League etc to mention a few.
              </p>
                <p>
                  Currently with FC Bethel International was the winner Redeemed Football Challenge Cup and winner DOXA Sports Championship.
              </p>
              </div>
            )
          },
          {
            name: "Olagunju Nathaniel Ikhide",
            position: "Head Coach",
            bio: (
              <div>
                <p>
                  As Coach of FC Bethel International endowed with the special ability of motivating others towards achieving a collective goal as a team has helped inched his Coaching Career. He started his coaching career in 2003, after playing active football for 17 years from 1985 to 2002. He started Club football as a player with Guinness FC, to Central bank of Nigeria FC, Water Corporation FC, Sunshine FC Akure (where I was the Assistant Captain) all the way down to Kelsha FC (division One) Singapore where I retired as a player.
                </p>
                <p>
                  His Coaching experience with FC Bethel International and Apapa Golden Stars for sixteen years has attracted lots of honors from Championship winner to Silver medal, Bronze and Fourth placed. This include; Champion (8th Team) International Invitation Tournament in Lagos with FC Bethel, Champion Lagos State Extra Joss Tournament with Apapa Golden Stars, Winner RCCG Football Challenge Cup, Winner Doxa Sport Championship, First Runner Up (Silver) TREM Cup (Bishop Mike Okonkwo) Championship, Runners Up Surulere Regional Abridge League, Third Place (Bronze) Lagos State Speakers Club with Apapa Golden Stars, TIDA 2012 Abidjan Cote de Voir International Tournament with Apapa Golden Stars- Bronze medal and Lagos Metro League third Position with Apapa Golden Stars to mention a few.
                </p>
                <p>
                  His Coaching Career is buffered with the following Certificates: International Ambassadors in Sports Certificate, International DFB Coaching Course UEFA B Certificate (Germany) and FCAAN Course (Football Coaches Association of Africa Nations). Current member Lagos State Coaches Association and Member FCAAN Football Coaches Association of Africa Nations.
                </p>
              </div>
            )
          },
          {
            name: "Seyi Jones",
            position: "Team Manager",
            bio: (
              <div>
                <p>
                  Seyi is a FIIFA/NFF LICENSED  INTERMIDIARY licensed coach who is passionate about the development of your football players.
                </p>
                <p>
                  He possess a B.A. History and International Relations from the Lagos State University (LASU). French Certificate in DELF A2 ALLIANCE FRANCAISE.
                </p>
                <p>
                  In 2002, he was inivited by the Super Eagles for Korean/Japan World Cup 2002.
                </p>
                <p>
                  As a player, he formally played for Nigerian Ports Authority Nigeria 1994-1997, JCB FC - (Burkina Faso1998-2001) Stella Club (CoteD'ivoire 1997).
                </p>
              </div>
            )
          }
        ],
        goalkeepers: [
          {
            name: "Jimoh Godwin",
            image: jimoh,
            number: 1,
            dob: "17.11.2003",
            age: 16,
            nationality: "Nigerian",
            height: "6.1",
            weight: 71,
            position: "Goalkeeper",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "Vision",
              "High Concentration",
              "Discipline",
              "Perfect Ball Distribution",
              "Good Saves"
            ],
            matches: 26,
            goals: 6,
            assists: "Nil"
          },
          {
            name: "Daniel Emmanuel",
            image: daniel,
            number: 1,
            dob: "17.05.2001",
            age: 18,
            nationality: "Nigerian",
            height: "6",
            weight: 75,
            position: "Goalkeeper",
            foot: "right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "High Concentration",
              "Team Player",
              "Shot Stopper"
            ],
            matches: 21,
            goals: 6,
            assists: "Nil"
          }
        ],
        defenders: [
          {
            name: "Obinna Franklin Agha",
            image: obinna,
            number: 1,
            dob: "04.12.2003",
            age: 16,
            nationality: "Nigerian",
            height: "5.3",
            weight: 69,
            position: "Left Back",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Good Marker",
              "Vision",
              "Overlapping Runs",
              "Physically and Mentally Strong",
              "Team Player"
            ],
            matches: 7,
            goals: "Nil",
            assists: 3
          },
          {
            name: "Sodiq Adeyemi Ademola",
            image: sodiq,
            number: 1,
            dob: "15.02.2002",
            age: 17,
            nationality: "Nigerian",
            height: "5.7",
            weight: 67,
            position: "Right Back",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Good Marker",
              "Good Crosser of the Ball",
              "Overlapping Runs",
              "Physically and Mentally Strong",
              "Team Player"
            ],
            matches: 26,
            goals: 2,
            assists: 4
          },
          {
            name: "Prince Okereafor",
            image: prince,
            number: 1,
            dob: "13.01.2003",
            age: 16,
            nationality: "Nigerian",
            height: "5.8",
            weight: 71,
            position: "Left Back",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "Vision",
              "Good crosser of the Ball",
              "Team Player",
              "Discipline"
            ],
            matches: 17,
            goals: 1,
            assists: 3
          },
          {
            name: "Abel Anang Johnson",
            image: abel,
            number: 1,
            dob: "15.04.2001",
            age: "18",
            nationality: "Nigerian",
            height: "5.8",
            weight: 78,
            position: "Left Center Back",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Highly Intelligent",
              "Team Coordination",
              "Strong Marker",
              "Aerial Prowess",
              "Team Player",
              "Good Discpline"
            ],
            matches: 17,
            goals: 1,
            assists: "Nil"
          },
          {
            name: "Ibrahim Bature",
            image: ibrahim,
            number: 1,
            dob: "04.04.2002",
            age: 17,
            nationality: "Nigerian",
            height: "5.9",
            weight: 65,
            position: "Left Back",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "Good Crosser",
              "Good Marker",
              "Team Player",
              "Goal Scorer"
            ],
            matches: 26,
            goals: 3,
            assists: 8
          }
        ],
        midfielders: [
          {
            name: "Akpam Abraham",
            image: akpam,
            number: 1,
            dob: "08.01.2002",
            age: "17",
            nationality: "Nigerian",
            height: "5.5",
            weight: 65,
            position: "Midfielder",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "Good Passer",
              "Goal Scorer",
              "Team Player"
            ],
            matches: 22,
            goals: 3,
            assists: 12
          },
          {
            name: "Bless Udom Aniekan",
            image: bless,
            number: 1,
            dob: "14.02.2003",
            age: 16,
            nationality: "Nigerian",
            height: "6.1",
            weight: 77,
            position: "Defensive Midfield",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Highly Intelligent",
              "Good Ball Distribution",
              "Team Player",
              "Great Vision",
              "Discipline"
            ],
            matches: 24,
            goals: 2,
            assists: 2
          },
          {
            name: "Kehinde Noah Ayannubi",
            image: kehinde,
            number: 1,
            dob: "14.02.2003",
            age: 16,
            nationality: "Nigerian",
            height: "6.1",
            weight: 77,
            position: "Defensive Midfield",
            foot: "Right Foot",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Highly Intelligent",
              "Good Ball Distribution",
              "Team Player",
              "Great Vision",
              "Discipline"
            ],
            matches: 24,
            goals: 2,
            assists: 2
          },
          {
            name: "Obiri Ugochukwu Chikora",
            image: obiri,
            number: 1,
            dob: "19.09.2001",
            age: 18,
            nationality: "Nigerian",
            height: "5.9",
            weight: 73,
            position: "Defensive Midfield",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Team Coordination",
              "Good Vision",
              "Strong Marker",
              "Team Player",
              "Discipline"
            ],
            matches: 21,
            goals: 2,
            assists: 3
          },
          {
            name: "Collins Gyamfi",
            image: collins,
            number: 1,
            dob: "15.07.2002",
            age: 17,
            nationality: "Ghanaian",
            height: "5.4",
            weight: 60,
            position: "Midfielder",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Great Vision",
              "Good passer of the Ball",
              "Team Player",
              "Discipline"
            ],
            matches: 18,
            goals: 4,
            assists: 8
          }
        ],
        forwards: [
          {
            name: "Maclyn Biokpo Jenewari",
            image: maclyn,
            number: 1,
            dob: "25.01.2000",
            age: 19,
            nationality: "Nigerian",
            height: "5.9",
            weight: 83,
            position: "Left/Right Winger",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Pace",
              "Goal Scorer",
              "High Intensity",
              "Aerial Strength",
              "Physical and Mentally Strong"
            ],
            matches: 26,
            goals: 14,
            assists: 7
          },
          {
            name: "John Bassey",
            image: john,
            number: 1,
            dob: "04.06.2002",
            age: 17,
            nationality: "Nigerian",
            height: "5.6",
            weight: 71,
            position: "Right Wing",
            foot: "Left",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Dribbling Skills",
              "Goal Scorer",
              "Physically and Mentally Strong",
              "Team Player"
            ],
            matches: 9,
            goals: 3,
            assists: 4
          },
          {
            name: "William Ayo",
            image: william,
            number: 1,
            dob: "03.03.2001",
            age: 16,
            nationality: "Ghanaian",
            height: "6",
            weight: 80,
            position: "Forward",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Aerial Prowess",
              "Good Ball Control",
              "Team Player",
              "Discipline"
            ],
            matches: 17,
            goals: 7,
            assists: 4
          },
          {
            name: "Alaba Olawale",
            image: alaba,
            number: 1,
            dob: "12.08.1997",
            age: 22,
            nationality: "Nigerian",
            height: "6.3",
            weight: 90,
            position: "Forward",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Aerial Prowess",
              "Good Ball Control",
              "Team Player",
              "Discipline"
            ],
            matches: 17,
            goals: 7,
            assists: 3
          },
          {
            name: "Samuel Anietie",
            image: samuel,
            number: 1,
            dob: "08.04.2001",
            age: 18,
            nationality: "Nigerian",
            height: "5.6",
            weight: 65,
            position: "Left/Right Winger",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Aerial Prowess",
              "Good Ball Control",
              "Team Player",
              "Discipline"
            ],
            matches: 26,
            goals: 7,
            assists: 8
          },
          {
            name: "Okechukwu Nwanna",
            image: okechukwu,
            number: 1,
            dob: "01.10.2000",
            age: 19,
            nationality: "Nigerian",
            height: "6.1",
            weight: 79,
            position: "Forward",
            foot: "",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Team Coordination",
              "Good Header",
              "Good passer of the Ball",
              "Team Player",
              "Discipline"
            ],
            matches: 22,
            goals: 4,
            assists: 14
          },
          {
            name: "Ebube Joachin",
            image: ebube,
            number: 1,
            dob: "30.10.2000",
            age: 19,
            nationality: "Nigerian",
            height: "6.1",
            weight: 85,
            position: "Forward",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Fast Player",
              "Team player",
              "Discipline",
              "Physically and Mentally Strong"
            ],
            matches: 17,
            goals: 5,
            assists: 2
          },
          {
            name: "Muhammed Ibrahim Inuwa",
            image: muhammed,
            number: 1,
            dob: "01.12.2003",
            age: "16",
            nationality: "Nigerian",
            height: "5.8",
            weight: 61,
            position: "Right Wing",
            foot: "Right",
            club: "FC Bethel International",
            league: "Surulere Regional League",
            qualities: [
              "Goal Scorer",
              "Team Corrdination",
              "Good Header",
              "Good passer of the Ball",
              "Team Player",
              "Discipline"
            ],
            matches: 19,
            goals: 6,
            assists: 4
          }
        ]
      }
    };
  }

  findPlayer = name => {
    const players = { ...this.state.players };
    return Object.keys(players)
      .map(i => players[i])
      .find(pos => {
        return pos.some(player => player.name === name);
      })
      .filter(x => x.name === name)[0];
  };

  render() {
    const { location } = this.props;
    const timeout = { enter: 300, exit: 0 };

    return (
      <TransitionGroup component={null}>
        <CSSTransition key={location.key} timeout={timeout} classNames="fade">
          <div>
            <Switch location={location}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/partners" exact component={Partners} />
              <Route
                path="/players"
                exact
                render={props => (
                  <Players
                    {...props}
                    players={this.state.players}
                    findPlayer={this.findPlayer}
                  />
                )}
              />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default withRouter(App);

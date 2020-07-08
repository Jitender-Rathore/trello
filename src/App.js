import React from "react";
import "./App.css";
import TrelloTasks from "./components/TrelloTasks";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  FaRegStar,
  FaHome,
  FaTrello,
  FaSearch,
  FaBriefcase,
  FaTh,
} from "react-icons/fa";

function App() {
  return (
    <div>
      <header className="masthead">
        <div className="boards-menu">
          <button className="boards-btn btn">
            <FaTh></FaTh>
          </button>
          <button className="boards-btn btn">
            <FaHome></FaHome>
          </button>
          <button className="boards-btn btn">
            <FaTrello className="board-icon"></FaTrello>Boards
          </button>
          <div className="board-search">
            <input type="search" className="board-search-input" />
            <button className="btn">
              <FaSearch className="search-icon"></FaSearch>
            </button>
          </div>
        </div>

        <div className="logo">
          <h1>
            <FaTrello className="logo-icon"></FaTrello>Trello
          </h1>
        </div>
      </header>
      <section className="board-info-bar">
        <div className="board-controls">
          <button className="board-title btn">
            <h2>Cricket Auction</h2>
          </button>
          <button className="star-icon btn">
            <FaRegStar></FaRegStar>
          </button>
          <button className="btn seperator">|</button>
          <button className="personal-btn btn">
            Bro Developers<span className="free">Free</span>
          </button>
          <button className="btn seperator">|</button>
          <button className="personal-btn btn">
            <FaBriefcase className="board-icon"></FaBriefcase>Private
          </button>
          <button className="btn seperator">|</button>
          <button className="btn circular-btn">B</button>
          <button className="btn circular-btn">M</button>
          <button className="btn circular-btn-last">V</button>
          <button className="personal-btn btn">Invite</button>
        </div>
      </section>
      <section className="lists-container">
        <TrelloTasks />
      </section>
    </div>
  );
}

export default App;

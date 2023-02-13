import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <header>
        <ul>
          <div className="Lnks">
            <li>
              <Link className="Link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="Link" to="/sample1">
                Sample1
              </Link>
            </li>
            <li>
              <Link className="Link" to="/sample2">
                Sample2
              </Link>
            </li>
            <li>
              <Link className="Link" to="/sample3">
                Sample3
              </Link>
            </li>
          </div>
        </ul>
      </header>
    </div>
  );
}

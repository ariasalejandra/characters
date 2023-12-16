import React from "react";

export default function Header() {
  return(
    <React.Fragment>
        <header class="header-main">
          <nav>
            <ul className="ul-special">
                <li><a className="hvr-float og-text-color " href="/">Home</a></li>
                <li ><a className="hvr-float og-text-color" href="/about">About</a></li>
                <li><a className="hvr-float og-text-color" href="/characters">Characters</a></li>
                <li><a className="hvr-float og-text-color" href="/lore">Lore</a></li>            </ul>
          </nav>
        </header>
    </React.Fragment>
  )
}
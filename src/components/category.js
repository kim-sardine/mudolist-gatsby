import * as React from "react"

import { Link } from "gatsby"

import AllPlaylists from "../../content/index.yaml"
import { getRandomPlaylistURL } from '../utils';

const Category = ({orderBy}) => {
    const randomPlaylistURL = getRandomPlaylistURL(AllPlaylists);
    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <Link className={`nav-link`} to={randomPlaylistURL}>랜덤재생</Link>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${orderBy === 'new' ? 'active': ''}`} href="?order=new">최신순</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${orderBy === 'old' ? 'active': ''}`} href="?order=old">오래된순</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">키워드</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">키워드 1</a></li>
                            <li><a className="dropdown-item" href="#">키워드 1</a></li>
                            <li><a className="dropdown-item" href="#">키워드 3</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="#">키워드 4</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
export default Category
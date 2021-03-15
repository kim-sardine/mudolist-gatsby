import * as React from "react"

// import { Link } from "gatsby"

const Category = () => {
    return (
        <div class="row">
            <div class="col-lg-8 col-md-8 mx-auto">
                <ul class="nav nav-pills nav-justified">
                    <li class="nav-item">
                        <a class="nav-link" href="/">랜덤재생</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?order=new">최신</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="?order=old">오래된</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">키워드</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">키워드 1</a></li>
                            <li><a class="dropdown-item" href="#">키워드 1</a></li>
                            <li><a class="dropdown-item" href="#">키워드 3</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">키워드 4</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Category
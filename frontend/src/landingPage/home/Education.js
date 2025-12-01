import { Link } from "react-router-dom";

function Education() {
    return (
        <div className="container mb-5">
            <div className="row p-3">

                {/* LEFT IMAGE */}
                <div className="col-lg-6 col-md-12 card text-center border-0">
                    <img
                        src="media/images/education.svg"
                        className="card-img-top mb-3"
                        alt="Education"
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-lg-6 col-md-12 align-items-center d-flex">
                    <div className="card border-0">
                        <div className="card-body">

                            {/* ======= COURSES HEADING ======= */}
                            <h3
                                className="card-title mb-3"
                                style={{ color: "var(--text)" }}
                            >
                                Learn trading the right way
                            </h3>

                            {/* COURSES DESCRIPTION */}
                            <p
                                className="card-text"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                TradeGuru helps beginners learn trading with simple lessons,
                                real-time examples, virtual funds, and guided practice —
                                all in one structured learning path. Build confidence
                                before entering real markets.
                            </p>

                            {/* LINK TO COURSES */}
                            <Link
                                to="/courses"
                                className="card-link text-decoration-none"
                                style={{ color: "#387ed1" }}
                            >
                                Start Learning <i className="fa-solid fa-arrow-right mb-5"></i>
                            </Link>


                            {/* ======= FAQ HEADING (NEW) ======= */}
                            <h3
                                className="card-title mt-4 mb-3"
                                style={{ color: "var(--text)" }}
                            >
                                Get answers instantly
                            </h3>

                            {/* FAQ DESCRIPTION */}
                            <p
                                className="card-text"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Have questions about trading, features, tools, or how TradeGuru works?
                                Browse our detailed FAQ section to find quick and clear answers.
                            </p>

                            {/* LINK TO FAQ */}
                            <Link
                                to="/faq"
                                className="card-link text-decoration-none"
                                style={{ color: "#387ed1" }}
                            >
                                Visit FAQ <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Education;

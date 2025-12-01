import { useTheme } from "../context/ThemeContext";

function OpenAccount() {
    const { theme } = useTheme();
    const textColor = theme === "dark" ? "#ffffff" : "#424242";

    return (
        <div className="container pt-5 mb-5">
            <div className="card text-center mb-3 border-0">
                <div className="card-body">
                    <h1 className="card-title mb-3" style={{ color: textColor }}>
                        Open a TradeGuru account
                    </h1>

                    <p className="card-text mb-3 fs-5" style={{ color: textColor }}>
                        Modern tools, virtual funds, and step-by-step trading support.
                    </p>

                    <a href="/signup" className="btn btn-primary mt-3">
                        Sign up for free
                    </a>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;

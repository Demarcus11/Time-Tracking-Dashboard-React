/* eslint-disable react/prop-types */
export function Card({ item, index, selectedTimeframe }) {
  const getTimeLabel = (timeframe) => {
    switch (timeframe) {
      case "daily":
        return "Yesterday";
      case "weekly":
        return "Last Week";
      case "monthly":
        return "Last Month";
      default:
        return "";
    }
  };

  return (
    <div
      key={index}
      className={`dashboard__card card--sm ${item.title
        .replace(/\s+/g, "-")
        .toLowerCase()}`}
    >
      <div className="card--lg button | content-flow" tabIndex={0}>
        <header className="flex">
          <h2 className="card__title">{item.title}</h2>
          <button className="button menu">
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </header>
        <div className="time-stats | flex">
          <span className="current-time">
            {item.timeframes[selectedTimeframe].current}hrs
          </span>
          <span className="previous-time">
            {getTimeLabel(selectedTimeframe)} -{" "}
            {item.timeframes[selectedTimeframe].previous}hrs
          </span>
        </div>
      </div>
    </div>
  );
}

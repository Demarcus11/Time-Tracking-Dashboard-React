export function ProfileSideBar({ selectedTimeframe, setSelectedTimeframe }) {
  return (
    <aside className="dashboard__sidebar dashboard__card profile__card profile | grid-row-span-2">
      <div className="card--card-lg profile | flex">
        <div className="profile__profile-picture">
          <img src="src\assets\images\image-jeremy.png" alt="Jeremy Robson" />
        </div>
        <h1 className="name | flex">
          <span>Report for</span>
          Jeremy Robson
        </h1>
      </div>
      <div className="card--sm | flex">
        <div>
          <input
            className="radio"
            type="radio"
            value="daily"
            id="daily" // compares selectedFrquency to the string to only check the checked button, will be checked={false} if it doesnt match
            checked={selectedTimeframe === "daily"}
            onChange={() => setSelectedTimeframe("daily")}
          />
          <label className="time-selector-label" htmlFor="daily">
            Daily
          </label>
        </div>

        <div>
          <input
            className="radio"
            type="radio"
            value="weekly"
            id="weekly"
            checked={selectedTimeframe === "weekly"}
            onChange={() => setSelectedTimeframe("weekly")}
          />
          <label className="time-selector-label" htmlFor="weekly">
            Weekly
          </label>
        </div>

        <div>
          <input
            className="radio"
            type="radio"
            value="monthly"
            id="monthly"
            checked={selectedTimeframe === "monthly"}
            onChange={() => setSelectedTimeframe("monthly")}
          />
          <label className="time-selector-label" htmlFor="monthly">
            Monthly
          </label>
        </div>
      </div>
    </aside>
  );
}

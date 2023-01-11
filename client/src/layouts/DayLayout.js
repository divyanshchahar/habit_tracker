import ProcessDateString from "../utils/ProcessDatesString";

function DayLayout({ dailyData, goodCount, badCount }) {
  const [dayNum, dayName] = ProcessDateString(dailyData.dateString);

  return (
    <div className="day-layout">
      <span className="day-number">{`${dayNum} `}</span>
      <span className="day-name">
        {` ${dayName}`}
        <br></br>
      </span>

      <span className="habits good">{`${dailyData.develope.length} / ${goodCount} `}</span>
      <span>|</span>
      <span className="habits bad">{` ${dailyData.letgo.length} / ${badCount}`}</span>
    </div>
  );
}

export default DayLayout;

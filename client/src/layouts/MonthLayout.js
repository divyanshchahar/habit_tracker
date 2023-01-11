import DayLayout from "./DayLayout";

function MonthLayout({ dailyHabits, goodCount, badCount }) {
  return (
    <div className="month-layout">
      {dailyHabits.map((item) => {
        return (
          <DayLayout
            dailyData={item}
            goodCount={goodCount}
            badCount={badCount}
          />
        );
      })}
    </div>
  );
}

export default MonthLayout;

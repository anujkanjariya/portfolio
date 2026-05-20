import React from "react";
import Calendar from "react-activity-calendar";
import { Row } from "react-bootstrap";

const CONTRIBUTION_YEAR = 2026;
const CONTRIBUTION_TOTAL = 150;

function getContributionLevel(count) {
  if (count >= 4) return 4;
  if (count >= 3) return 3;
  if (count >= 2) return 2;
  if (count >= 1) return 1;
  return 0;
}

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getStaticContributionData() {
  const today = new Date();
  const yearEnd = new Date(CONTRIBUTION_YEAR, 11, 31);
  const activeEnd =
    today.getFullYear() === CONTRIBUTION_YEAR && today < yearEnd
      ? today
      : yearEnd;

  const dates = [];

  for (
    let date = new Date(CONTRIBUTION_YEAR, 0, 1);
    date <= yearEnd;
    date.setDate(date.getDate() + 1)
  ) {
    dates.push(new Date(date));
  }

  const activeDates = dates.filter((date) => date <= activeEnd);
  const contributionCounts = activeDates.map((date, index) =>
    index % 3 === 0 || date.getDay() === 2 || date.getDay() === 4 ? 1 : 0
  );

  let total = contributionCounts.reduce((sum, count) => sum + count, 0);
  let index = 0;

  while (total < CONTRIBUTION_TOTAL) {
    contributionCounts[index % contributionCounts.length] += 1;
    total += 1;
    index += 5;
  }

  return dates.map((date, index) => {
    const count =
      index < contributionCounts.length ? contributionCounts[index] : 0;

    return {
      date: formatLocalDate(date),
      count,
      level: getContributionLevel(count),
    };
  });
}

function Github() {
  const contributionData = getStaticContributionData();

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <Calendar
        data={contributionData}
        totalCount={CONTRIBUTION_TOTAL}
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
      />
    </Row>
  );
}

export default Github;

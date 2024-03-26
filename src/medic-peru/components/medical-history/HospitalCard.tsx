export const HospitalCard = () => {
  return (
    <>
      <div className="stats shadow w-full ">
        <div className="stat place-items-center ">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center ">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>
      </div>
    </>
  );
};

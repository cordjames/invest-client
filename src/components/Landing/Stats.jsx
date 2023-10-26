import StatCard from "./stats-comps/StatCard";

const stat = [
  { header: "$4M +", content: "PM Card" },
  { header: "$5M+", content: "SGT Vouchers" },
  { header: "46,000", content: "Active Investors" },
  { header: "$400M+", content: "Inv. Deposit" },
  { header: "$980+", content: "withdrawal" },
  { header: "4.3/5", content: "service Assured" },
];
function Stats() {
  return (
    <div className="container mx-auto px-[1rem] mt-4">
      {/* stat container*/}
      <div className="flex flex-wrap bg-white w-fit justify-center sm:max-w-[75%] lg:max-w-full rounded-[1rem] mx-auto lg:py-[2rem]">
        {stat.map((item) => (
          <StatCard
            key={item.header}
            cardHeader={item.header}
            cardContent={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Stats;

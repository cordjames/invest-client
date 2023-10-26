import Action from "./Action";
import WorkBox from "./WorkBox";

function SubHero({ header, headerContent, children }) {
  return (
    <div className="flex flex-wrap px-[15px] container mx-auto my-16">
      <div className="lg:w-[33.33333%]">
        <Action header={header} content={headerContent} />
      </div>
      <div className="lg:max-w-[66.66667%] flex flex-wrap justify-evenly px-[15px]">
        {children.map((item) => (
          <WorkBox
            key={item.header}
            header={item.header}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
}

export default SubHero;

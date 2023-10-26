import Action from "./sub-hero/Action";
let hasParameter = false;

function TextImage({ hasParameter, content, header, cond, src }) {
  return (
    <div
      className={`px-[15px] flex flex-wrap container mx-auto my-20 ${
        hasParameter ? "flex-row-reverse" : ""
      }`}
    >
      <div className="lg:max-w-[58.33333%]">
        <Action content={content} header={header} noBtn={cond} />
      </div>
      <div className="lg:max-w-[41.66667%] w-full">
        <img src={src} alt="" className="mx-auto" />
        {/* <img src={src} height="396" width="243" alt="" className="mx-auto" /> */}
      </div>
    </div>
  );
}

export default TextImage;

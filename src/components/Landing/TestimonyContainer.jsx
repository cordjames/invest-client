import { useEffect } from "react";
import TestimonyCard from "./TestimonyCard";
import Glide from "@glidejs/glide";
let hasParameter = false;

const data = [
  {
    header: "Felicity  McDonald",
    content:
      "A platform with so many ambitious goals towards investors, a platform with professional managers for others' welfare.",
  },
  {
    header: "Meshal Meshari",
    content:
      "This is one of the best companies I've invested in, they give high profits and they are responsible for any loss. Thank you Ascentè",
  },
  {
    header: "Elizabeth T. Bloom",
    content:
      " With an investment on Ascentè, I got $20,500 profit from binary trading, this platform, strategies, and guidance are the best",
  },
  {
    header: "Henry Nxumalo",
    content:
      "For months it seemed impossible until I made $10,000 from my bitcoin investment with Ascentè. ",
  },
  {
    header: "Ibrahim Aban Abadi",
    content:
      "Ascentè is one of the best private crypto investment organization, solely committed to the generation and awareness of the wealth",
  },
  {
    header: "Christina J. James",
    content:
      "I'm so excited, I give gratitude to the entire staff of Ascentè for I have received my profit of $9,450...thank you all, especially to my manager",
  },
  {
    header: "Zhong Qing",
    content:
      "I saw a testimony about Ascentè, then I decided to Invest, hoping I would get my profit as stated on the website. The exciting part is when I saw my money growing.",
  },
];

function TestimonyContainer({ content, header, src, cond, hasParameter }) {
  useEffect(() => {
    const options = {
      type: "carousel",
      perView: 3,
      focusAt: "center",
      gap: 16,
    };

    const glide = new Glide(".glide", options).mount();

    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <section class="container mx-auto overflow-hidden mb-28 ">
      <h4 class="font-bold text-3xl text-[#fff] relative pb-2 mb-5 before:left-[46%] text-center before:left-[46%]  before:bg-white before:bottom-0 before:content-[''] before:h-[2px] before:absolute before:w-[80px] before:m-0">
        Testimony
      </h4>
      <div class="glide">
        <div class="glide__track overflow-hidden" data-glide-el="track">
          <ul class="glide__slides flex">
            {/* {#each data as item} */}
            {data.map((item, index) => {
              return (
                <li class="glide__slide !w-fit">
                  <TestimonyCard content={item.content} header={item.header} />
                </li>
              );
            })}
            {/* {/each} */}
          </ul>
        </div>

        {/* <!-- <div class="glide__bullets" data-glide-el="controls[nav]">
			{#each Array.from({ length: glide.length }) as _, i}
				<button class="glide__bullet" data-glide-dir={`=${i}`} aria-label={`Slide ${i + 1}`} />
			{/each}
		</div> --> */}
      </div>
    </section>
  );
}

export default TestimonyContainer;

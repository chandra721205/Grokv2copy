import svgPaths from "./svg-zrg5sl0lnc";

function Container() {
  return <div className="absolute bg-[#dab2ff] blur-[64px] left-[-0.23px] opacity-30 rounded-[22369600px] size-[349.361px] top-[33.89px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#fda5d5] blur-[64px] left-[564.67px] opacity-30 rounded-[22369600px] size-[421.952px] top-[-68.39px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#8ec5ff] blur-[64px] left-[469px] opacity-30 rounded-[22369600px] size-[384px] top-[804.06px]" data-name="Container" />;
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#0a0a0a] text-[14px] top-[0.33px]">9:41</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative rounded-[6px] shrink-0 w-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container4() {
  return <div className="bg-[#1e2939] flex-[1_0_0] h-[12px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        {[...Array(2).keys()].map((_, i) => (
          <Container3 key={i} />
        ))}
        <Container4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[358px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Text />
        <Container5 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36.396px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36.4px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.33px] tracking-[-0.084px]">Travel Essentials</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Everything you need for a seamless journey</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px]">Search destination...</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] h-[50.333px] relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16.667px] py-[0.667px] relative size-full">
          <Icon />
          <TextInput />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] h-[160.063px] relative rounded-[20px] shrink-0 w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Heading />
        <Paragraph />
        <Container7 />
      </div>
    </div>
  );
}

function App() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon1() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[64.29%_58.33%_8.33%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-15.22%_-1.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 9.99833">
            <path d="M1.16667 8.83167V1.16667" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[54.17%] left-1/2 right-[49.96%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[70.83%] left-1/2 right-[49.96%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[64.29%_41.67%_8.33%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-15.22%_-1.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 9.99833">
            <path d="M1.16667 1.16667V8.83167" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_37.5%_33.33%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-100%_-16.67%_-100.01%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33347 3.50007">
            <path d={svgPaths.p882f300} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_33.29%_54.17%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_33.29%_70.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[45.83%_66.63%_54.17%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_66.63%_70.83%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25.6667">
            <path d={svgPaths.p688ea00} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.5961 0.0627 0.9804)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(233, 212, 255) 0%, rgb(218, 178, 255) 100%)" }}>
      <Icon1 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[29.99px] top-[103.25px] w-[111.021px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">Accommodation</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[1] css-3foyfs relative rounded-[20px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App />
      <Container9 />
      <App1 />
    </div>
  );
}

function App2() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon2() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[11.72%_11.72%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5521 23.5521">
            <path d={svgPaths.p14227c00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(190, 219, 255) 0%, rgb(83, 234, 253) 100%)" }}>
      <Icon2 />
    </div>
  );
}

function App3() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[35.5px] top-[103.25px] w-[100px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">Transportation</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[2] css-3foyfs relative rounded-[20px] row-[1] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App2 />
      <Container10 />
      <App3 />
    </div>
  );
}

function App4() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon3() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6667 14">
            <path d={svgPaths.p4e6e100} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9607 0.2882 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.5%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p6ff2000} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9607 0.2882 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 2.33333">
            <path d="M1.16667 1.16667H8.16667" id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9607 0.2882 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p6ff2000} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9607 0.2882 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 214, 167) 0%, rgb(255, 210, 48) 100%)" }}>
      <Icon3 />
    </div>
  );
}

function App5() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[20.72px] top-[103.25px] w-[129.552px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">Self-Drive Vehicles</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[1] css-3foyfs relative rounded-[20px] row-[2] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App4 />
      <Container11 />
      <App5 />
    </div>
  );
}

function App6() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon4() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_54.17%_54.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 12.8333">
            <path d={svgPaths.p3e0bfdc0} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9020 0.0000 0.4627)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_70.83%_8.33%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-5%_-1.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 25.6667">
            <path d="M1.16667 1.16667V24.5" id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9020 0.0000 0.4627)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_8.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-20%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.16667 25.6667">
            <path d={svgPaths.p3ecb4580} id="Vector" stroke="var(--stroke-0, #E60076)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.9020 0.0000 0.4627)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(252, 206, 232) 0%, rgb(255, 161, 173) 100%)" }}>
      <Icon4 />
    </div>
  );
}

function App7() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[19.21px] top-[103.25px] w-[132.573px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">{`Hospitality & Dining`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[2] css-3foyfs relative rounded-[20px] row-[2] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App6 />
      <Container12 />
      <App7 />
    </div>
  );
}

function App8() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon5() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-5%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 25.6667">
            <path d={svgPaths.p13d9ce00} id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3098 0.2235 0.9647)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.345 2.33333">
            <path d="M1.16667 1.16667H1.17833" id="Vector" stroke="var(--stroke-0, #4F39F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.3098 0.2235 0.9647)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[30.5px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(198, 210, 255) 0%, rgb(218, 178, 255) 100%)" }}>
      <Icon5 />
    </div>
  );
}

function App9() {
  return (
    <div className="absolute h-[35px] left-[16.67px] top-[94.5px] w-[137.667px]" data-name="App">
      <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] left-[69.08px] not-italic text-[#364153] text-[14px] text-center top-0 translate-x-[-50%] w-[119px]">{`Digital & Personal Assistance`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[1] css-3foyfs relative rounded-[20px] row-[3] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App8 />
      <Container13 />
      <App9 />
    </div>
  );
}

function App10() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon6() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6667 23.3333">
            <path d={svgPaths.p1f069000} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.42%_13.46%_35.42%_13.42%]" data-name="Vector">
        <div className="absolute inset-[-14.29%_-5.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8083 10.5">
            <path d={svgPaths.p1c47b700} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(164, 244, 207) 0%, rgb(70, 236, 213) 100%)" }}>
      <Icon6 />
    </div>
  );
}

function App11() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[28.47px] top-[103.25px] w-[114.052px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">Senior Care Gold</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[2] css-3foyfs relative rounded-[20px] row-[3] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App10 />
      <Container14 />
      <App11 />
    </div>
  );
}

function App12() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon7() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[37.5%] right-[45.83%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p6ff2000} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-[66.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p6ff2000} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-3/4 right-[8.33%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p6ff2000} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_41.67%_8.34%_8.36%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-8.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.3262 16.332">
            <path d={svgPaths.p39fb1e40} id="Vector" stroke="var(--stroke-0, #E17100)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.8824 0.4431 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[39.25px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 230, 133) 0%, rgb(255, 184, 106) 100%)" }}>
      <Icon7 />
    </div>
  );
}

function App13() {
  return (
    <div className="absolute content-stretch flex h-[17.5px] items-start left-[51.86px] top-[103.25px] w-[67.271px]" data-name="App">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-center">Pet Travel</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[1] css-3foyfs relative rounded-[20px] row-[4] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App12 />
      <Container15 />
      <App13 />
    </div>
  );
}

function App14() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon8() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3333 25.6619">
            <path d={svgPaths.p3f8ddf80} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.4980 0.1333 0.9961)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-10%_-1.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.33333 14">
            <path d="M1.16667 12.8333V1.16667" id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.4980 0.1333 0.9961)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[13.71%] right-[13.71%] top-[29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-5.74%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6571 8.16686">
            <path d={svgPaths.p23a31200} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.4980 0.1333 0.9961)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[17.79%_31.25%_60.75%_31.25%]" data-name="Vector">
        <div className="absolute inset-[-19.42%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8337 8.34206">
            <path d={svgPaths.p68e9e58} id="Vector" stroke="var(--stroke-0, #7F22FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.4980 0.1333 0.9961)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[30.5px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(221, 214, 255) 0%, rgb(218, 178, 255) 100%)" }}>
      <Icon8 />
    </div>
  );
}

function App15() {
  return (
    <div className="absolute h-[35px] left-[16.67px] top-[94.5px] w-[137.667px]" data-name="App">
      <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] left-[68.86px] not-italic text-[#364153] text-[14px] text-center top-0 translate-x-[-50%] w-[119px]">{`Travel Logistics & Protection`}</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[2] css-3foyfs relative rounded-[20px] row-[4] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App14 />
      <Container16 />
      <App15 />
    </div>
  );
}

function App16() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[158.667px] left-[0.67px] rounded-[20px] to-[rgba(0,0,0,0.05)] top-[2.67px] w-[169.667px]" data-name="App" />;
}

function Icon9() {
  return (
    <div className="h-[28px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 25.6706">
            <path d={svgPaths.p2b06d500} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0000 0.5882 0.5373)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 7">
            <path d={svgPaths.p80510c0} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "color(display-p3 0.0000 0.5882 0.5373)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[59.5px] pb-0 pt-[12px] px-[12px] rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)] size-[52px] top-[30.5px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(150, 247, 228) 0%, rgb(83, 234, 253) 100%)" }}>
      <Icon9 />
    </div>
  );
}

function App17() {
  return (
    <div className="absolute h-[35px] left-[16.67px] top-[94.5px] w-[137.667px]" data-name="App">
      <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[17.5px] left-[69.26px] not-italic text-[#364153] text-[14px] text-center top-0 translate-x-[-50%] w-[95px]">{`Safety & Geo-Sentinel`}</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(255,255,255,0.18)] col-[1] css-3foyfs relative rounded-[20px] row-[5] self-stretch shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)]" />
      <App16 />
      <Container17 />
      <App17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[358px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-[16px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(5,_minmax(0,_1fr))] relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[1188.063px] items-start left-[274px] pb-[96px] pl-[16px] pr-0 pt-[16px] top-0 w-[390px]" data-name="Container">
      <Container6 />
      <Container8 />
      <Container18 />
    </div>
  );
}

function App18() {
  return (
    <div className="absolute h-[1188.063px] left-0 overflow-clip top-0 w-[938px]" data-name="App" style={{ backgroundImage: "linear-gradient(128.292deg, rgb(233, 212, 255) 0%, rgb(219, 234, 254) 50%, rgb(252, 206, 232) 100%)" }}>
      <Container />
      <Container1 />
      <Container2 />
      <Container19 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-11.11%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
              <path d={svgPaths.p3ff7f900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.26%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.9995">
              <path d={svgPaths.p282f8f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[17.5px] not-italic text-[12px] text-center text-white top-[0.67px] translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[3.74px] px-0 py-[8px] rounded-[14px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.18)] top-[5.33px] w-[58.156px]" data-name="Button" style={{ backgroundImage: "linear-gradient(134.106deg, rgb(127, 0, 255) 0%, rgb(225, 0, 255) 100%)" }}>
      <Icon10 />
      <Text1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.pedb3a30} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
          <div className="absolute inset-[-23.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.3 6.3">
              <path d="M5.3 5.3L1 1" id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[20.5px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Search</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[69.38px] px-0 py-[8px] rounded-[14px] top-[5.33px] w-[64.75px]" data-name="Button">
      <Icon11 />
      <Text2 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1dcc0100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[141.6px] rounded-[22369600px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.24)] size-[60px] top-[-14.67px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(127, 0, 255) 0%, rgb(225, 0, 255) 100%)" }}>
      <Icon12 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
          <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.46433 3.00008">
              <path d={svgPaths.p5ce7600} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-6.67%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9996 17">
              <path d={svgPaths.p3337a00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[17px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Alerts</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[209.08px] px-0 py-[8px] rounded-[14px] top-[5.33px] w-[58.688px]" data-name="Button">
      <Icon13 />
      <Text3 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8">
              <path d={svgPaths.p11b86180} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.pb08b100} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.667px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[19px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Profile</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[275.25px] px-0 py-[8px] rounded-[14px] top-[5.33px] w-[61.667px]" data-name="Button">
      <Icon14 />
      <Text4 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[70.667px] relative shrink-0 w-full" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function App19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.18)] content-stretch flex flex-col h-[72px] items-start left-[290px] px-[8.667px] py-[0.667px] rounded-[24px] top-[523.33px] w-[358px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.28)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.24)]" />
      <Container20 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[16px] size-[28px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 7V2.33333H9.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d={svgPaths.p32fa1b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M2.33333 14H4.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M10.5 12.8333V15.1667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M17.5 12.8333V15.1667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M23.3333 14H25.6667" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.32%_8.33%_8.34%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0003 11.0002">
            <path d={svgPaths.p851b100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_16.67%_70.83%_83.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
            <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[79.17%] left-3/4 right-[8.33%] top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-0.5px_-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d="M2.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_83.33%_20.83%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
            <path d="M0.5 0.5V1.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[12.5%] right-[79.17%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-0.5px_-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
            <path d="M1.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[44px] pb-0 pt-[4px] px-[4px] rounded-[22369600px] size-[20px] top-[-4px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 128, 8) 0%, rgb(255, 200, 55) 100%)" }}>
      <Icon16 />
    </div>
  );
}

function App20() {
  return (
    <div className="absolute left-[854px] rounded-[22369600px] shadow-[0px_16px_40px_0px_rgba(0,0,0,0.24)] size-[60px] top-[447.33px]" data-name="App" style={{ backgroundImage: "linear-gradient(135deg, rgb(127, 0, 255) 0%, rgb(225, 0, 255) 100%)" }}>
      <Icon15 />
      <Container21 />
    </div>
  );
}

export default function Travelessentials() {
  return (
    <div className="bg-white relative size-full" data-name="travelessentials">
      <App18 />
      <App19 />
      <App20 />
    </div>
  );
}
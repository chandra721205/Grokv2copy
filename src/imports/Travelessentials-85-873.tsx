import svgPaths from "./svg-8v1clyjhz3";
import imgImageSelfDriveVehicles from "figma:asset/3228c28809b2416ca9fcb3cd8c1f246a20c72bb4.png";

function Container() {
  return <div className="absolute bg-[#ffb86a] blur-[64px] left-0 opacity-20 rounded-[22369600px] size-[384px] top-0" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#ffd230] blur-[64px] left-[554px] opacity-20 rounded-[22369600px] size-[384px] top-0" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#ffdf20] blur-[64px] left-[469px] opacity-20 rounded-[22369600px] size-[384px] top-[1366.5px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p56a9200} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_62.5%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[70.83%_37.5%_29.17%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-1px_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
            <path d="M1 1H7" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_20.83%_20.83%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 214, 167) 0%, rgb(255, 210, 48) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10px] px-[10px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28.594px] relative shrink-0 w-[49.667px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[#1e2939] text-[22px] top-[0.67px]">Cars</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[44px] relative shrink-0 w-[105.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container3 />
        <Heading1 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[58.72px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.4107 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[27.5px] not-italic text-[#ff6900] text-[14px] text-center top-[0.33px] translate-x-[-50%]">View All</p>
        <Icon1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[408px]" data-name="Container">
      <Container4 />
      <Button />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Compact Cars</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Hyundai i10, Maruti Swift</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Paragraph />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[37.969px]" data-name="Text" style={{ backgroundImage: "linear-gradient(146.288deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">AC</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[45.97px] rounded-[22369600px] top-0 w-[64.156px]" data-name="Text" style={{ backgroundImage: "linear-gradient(158.452deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">4 Seats</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[118.13px] rounded-[22369600px] top-0 w-[62.75px]" data-name="Text" style={{ backgroundImage: "linear-gradient(158.015deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Manual</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">1,200 - 1,800 rs</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[37px] relative shrink-0 w-[102.583px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container9 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container6 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Sedan</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Honda City, Hyundai Verna</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[37.969px]" data-name="Text" style={{ backgroundImage: "linear-gradient(146.288deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">AC</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[45.97px] rounded-[22369600px] top-0 w-[63.521px]" data-name="Text" style={{ backgroundImage: "linear-gradient(158.257deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">5 Seats</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[117.49px] rounded-[22369600px] top-0 w-[93.448px]" data-name="Text" style={{ backgroundImage: "linear-gradient(164.832deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Auto/Manual</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">2,000 - 3,200 rs</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[37px] relative shrink-0 w-[108.198px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Button2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container14 />
      <Container15 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[300px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container13 />
      <Container18 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">SUV</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Mahindra XUV, Toyota Fortuner</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Paragraph6 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[37.969px]" data-name="Text" style={{ backgroundImage: "linear-gradient(146.288deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">AC</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[45.97px] rounded-[22369600px] top-0 w-[63.198px]" data-name="Text" style={{ backgroundImage: "linear-gradient(158.156deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">7 Seats</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[117.17px] rounded-[22369600px] top-0 w-[47.719px]" data-name="Text" style={{ backgroundImage: "linear-gradient(152.037deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Auto</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">3,500 - 6,000 rs</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[37px] relative shrink-0 w-[107.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Button3 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container21 />
      <Container22 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[600px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container20 />
      <Container25 />
    </div>
  );
}

function Container27() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Luxury Cars</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">BMW, Mercedes, Audi</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph9 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[71.344px]" data-name="Text" style={{ backgroundImage: "linear-gradient(160.451deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Premium</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[79.34px] rounded-[22369600px] top-0 w-[63.521px]" data-name="Text" style={{ backgroundImage: "linear-gradient(158.257deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">5 Seats</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[150.86px] rounded-[22369600px] top-0 w-[47.719px]" data-name="Text" style={{ backgroundImage: "linear-gradient(152.037deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Auto</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Text10 />
      <Text11 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">8,000 - 15,000 rs</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[37px] relative shrink-0 w-[113.24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container30 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container28 />
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[900px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container27 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[172.667px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container19 />
      <Container26 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col h-[196px] items-start left-[-20px] overflow-clip pl-[20px] pr-[-760px] py-0 top-[56px] w-[448px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container35 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[58.33%_8.33%_12.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p12f67b00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_62.5%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p12f67b00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p32cd9cf0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_29.17%_27.08%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10.53%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11.5">
            <path d={svgPaths.p2f37d400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 201, 201) 0%, rgb(255, 184, 106) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10px] px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28.594px] relative shrink-0 w-[57.385px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[#1e2939] text-[22px] top-[0.67px]">Bikes</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[44px] relative shrink-0 w-[113.385px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container37 />
        <Heading7 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[58.72px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.4107 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[27.5px] not-italic text-[#ff6900] text-[14px] text-center top-[0.33px] translate-x-[-50%]">View All</p>
        <Icon3 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[408px]" data-name="Container">
      <Container38 />
      <Button5 />
    </div>
  );
}

function Container40() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Royal Enfield</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Classic 350, Himalayan, Meteor</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph12 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[103.354px]" data-name="Text" style={{ backgroundImage: "linear-gradient(166.228deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Touring Ready</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[111.35px] rounded-[22369600px] top-0 w-[120.042px]" data-name="Text" style={{ backgroundImage: "linear-gradient(168.083deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Helmets Included</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">1,089 - 2,020 rs</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[37px] relative shrink-0 w-[104.885px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container43 />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container41 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container40 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading9() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Touring Bikes</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Honda CB500X, Kawasaki Versys</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading9 />
      <Paragraph15 />
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[88.99px]" data-name="Text" style={{ backgroundImage: "linear-gradient(164.11deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Long Range</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[96.99px] rounded-[22369600px] top-0 w-[102.25px]" data-name="Text" style={{ backgroundImage: "linear-gradient(166.085deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Luggage Rack</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">1,500 - 3,000 rs</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[37px] relative shrink-0 w-[104.927px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Button7 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container48 />
      <Container49 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[300px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container47 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading10() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Cruisers</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Harley Davidson, Indian Scout</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph18 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[71.344px]" data-name="Text" style={{ backgroundImage: "linear-gradient(160.451deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Premium</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[79.34px] rounded-[22369600px] top-0 w-[96.073px]" data-name="Text" style={{ backgroundImage: "linear-gradient(165.228deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Comfort Ride</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">3,000 - 6,500 rs</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[37px] relative shrink-0 w-[107.438px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-gradient-to-r from-[#ff8904] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#ff6900] w-[86.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[43.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">View All</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Button8 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container55 />
      <Container56 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[600px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container54 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[172.667px] relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Container53 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex flex-col h-[196px] items-start left-[-20px] overflow-clip pl-[20px] pr-[-460px] py-0 top-[56px] w-[448px]" data-name="Container">
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container62 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[58.33%_8.33%_12.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p12f67b00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_62.5%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
            <path d={svgPaths.p12f67b00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[58.33%] right-[33.33%] top-[16.67%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p32cd9cf0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[33.33%_29.17%_27.08%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-10.53%_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11.5">
            <path d={svgPaths.p2f37d400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(164, 244, 207) 0%, rgb(123, 241, 168) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10px] px-[10px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28.594px] relative shrink-0 w-[95.302px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[#1e2939] text-[22px] top-[0.67px]">Scooters</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[44px] relative shrink-0 w-[151.302px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container64 />
        <Heading11 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[58.72px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.4107 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[27.5px] not-italic text-[#ff6900] text-[14px] text-center top-[0.33px] translate-x-[-50%]">View All</p>
        <Icon5 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[408px]" data-name="Container">
      <Container65 />
      <Button9 />
    </div>
  );
}

function Container67() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Electric Scooters</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Ola S1, Ather 450X</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph21 />
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[93.542px]" data-name="Text" style={{ backgroundImage: "linear-gradient(164.846deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Eco-Friendly</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[101.54px] rounded-[22369600px] top-0 w-[74.521px]" data-name="Text" style={{ backgroundImage: "linear-gradient(161.225deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Low Cost</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">600 - 1,200 rs</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[37px] relative shrink-0 w-[93.188px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-gradient-to-r from-[#51a2ff] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#2b7fff] w-[100.479px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">Book Now</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container70 />
      <Button10 />
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container68 />
      <Container69 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container67 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Petrol Scooters</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Honda Activa, TVS Jupiter</p>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph24 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[76.719px]" data-name="Text" style={{ backgroundImage: "linear-gradient(161.726deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Easy Ride</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[84.72px] rounded-[22369600px] top-0 w-[102.177px]" data-name="Text" style={{ backgroundImage: "linear-gradient(166.075deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">City Commute</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">500 - 900 rs</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[37px] relative shrink-0 w-[83.229px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-gradient-to-r from-[#51a2ff] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#2b7fff] w-[100.479px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">Book Now</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Button11 />
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container75 />
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[300px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container74 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[172.667px] relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex flex-col h-[196px] items-start left-[-20px] overflow-clip pl-[20px] pr-[-160px] py-0 top-[56px] w-[448px]" data-name="Container">
      <Container81 />
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Container66 />
      <Container82 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[8.33%] right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
            <path d={svgPaths.p19822800} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[8.33%] right-3/4 top-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p2b3e4240} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%_8.33%_20.83%_41.67%]" data-name="Vector">
        <div className="absolute inset-[-10%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 12">
            <path d={svgPaths.p142be00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[12.5%] left-1/4 right-[58.33%] top-[70.83%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.2118 0.2549 0.3255)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 size-[44px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(254, 230, 133) 0%, rgb(255, 223, 32) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[10px] px-[10px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="flex-[1_0_0] h-[28.594px] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28.6px] left-0 not-italic text-[#1e2939] text-[22px] top-[0.67px]">Camper Vans</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[44px] relative shrink-0 w-[198.615px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container84 />
        <Heading14 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[58.72px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #FF6900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "color(display-p3 1.0000 0.4107 0.0000)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.719px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[27.5px] not-italic text-[#ff6900] text-[14px] text-center top-[0.33px] translate-x-[-50%]">View All</p>
        <Icon7 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex h-[44px] items-center justify-between left-0 top-0 w-[408px]" data-name="Container">
      <Container85 />
      <Button12 />
    </div>
  );
}

function Container87() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading15() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Compact Campers</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Tata Winger, Force Traveller</p>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Paragraph27 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[83.583px]" data-name="Text" style={{ backgroundImage: "linear-gradient(163.138deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Sleeps 2-4</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[91.58px] rounded-[22369600px] top-0 w-[111.344px]" data-name="Text" style={{ backgroundImage: "linear-gradient(167.182deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Basic Amenities</p>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">4,000 - 7,000 rs</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[37px] relative shrink-0 w-[106.01px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-gradient-to-r from-[#51a2ff] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#2b7fff] w-[100.479px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">Book Now</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container90 />
      <Button13 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container88 />
      <Container89 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-0 rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container87 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[171.333px] left-0 rounded-[20px] to-[rgba(0,0,0,0.1)] top-[4px] via-1/2 via-[rgba(0,0,0,0)] w-[286.667px]" data-name="Container" />;
}

function Heading16() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">Luxury RVs</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.33px]">Mercedes Sprinter, Custom Builds</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[45px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading16 />
      <Paragraph30 />
    </div>
  );
}

function Text24() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-0 rounded-[22369600px] top-0 w-[83.708px]" data-name="Text" style={{ backgroundImage: "linear-gradient(163.162deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Sleeps 4-6</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute border-[0.667px] border-[rgba(255,214,167,0.5)] border-solid h-[25.333px] left-[91.71px] rounded-[22369600px] top-0 w-[100.25px]" data-name="Text" style={{ backgroundImage: "linear-gradient(165.818deg, rgb(255, 237, 212) 0%, rgb(254, 243, 198) 100%)" }}>
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[10px] not-italic text-[#ca3500] text-[12px] top-[4.67px]">Full Amenities</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[25.333px] relative shrink-0 w-full" data-name="Container">
      <Text24 />
      <Text25 />
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[14px] top-0">9,000 - 18,000 rs</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-[0.67px]">Per Day</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[37px] relative shrink-0 w-[113.635px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-gradient-to-r from-[#51a2ff] h-[36px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 to-[#2b7fff] w-[100.479px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[50.5px] not-italic text-[14px] text-center text-white top-[8.33px] translate-x-[-50%]">Book Now</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex h-[45px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container97 />
      <Button14 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[139.333px] items-start left-[16px] top-[16px] w-[254.667px]" data-name="Container">
      <Container95 />
      <Container96 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] border-[0.667px] border-[rgba(255,255,255,0.7)] border-solid h-[172.667px] left-[300px] rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[288px]" data-name="Container">
      <Container94 />
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="h-[172.667px] relative shrink-0 w-full" data-name="Container">
      <Container93 />
      <Container100 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex flex-col h-[196px] items-start left-[-20px] overflow-clip pl-[20px] pr-[-160px] py-0 top-[56px] w-[448px]" data-name="Container">
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container102 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%_8.32%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18.3361">
            <path d={svgPaths.p30439e00} id="Vector" stroke="var(--stroke-0, #F54900)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.9607 0.2882 0.0000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.33px]">Insurance Included</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">All rentals include comprehensive insurance coverage</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="flex-[1_0_0] h-[43.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading3 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex gap-[12px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="h-[76.833px] relative rounded-[20px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(169.335deg, rgba(255, 137, 4, 0.2) 0%, rgba(255, 185, 0, 0.2) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,184,106,0.4)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container106 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6723 18.3377">
            <path d={svgPaths.p39a218f0} id="Vector" stroke="var(--stroke-0, #009966)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.0000 0.6000 0.4000)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.33px]">Electric Options Available</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">Choose eco-friendly EVs for sustainable travel</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="flex-[1_0_0] h-[43.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading17 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex gap-[12px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[76.833px] relative rounded-[20px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(169.335deg, rgba(0, 212, 146, 0.2) 0%, rgba(5, 223, 114, 0.2) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(94,233,181,0.4)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container110 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_12.43%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.54%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.696 18.3333">
            <path d={svgPaths.p1f3cfb80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 6.66667">
            <path d={svgPaths.p2314a170} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] relative rounded-[10px] shrink-0 size-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.33px]">24/7 Roadside Assistance</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#4a5565] text-[12px] top-[0.67px]">Support available anytime, anywhere during your rental</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="flex-[1_0_0] h-[43.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading18 />
        <Paragraph35 />
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex gap-[12px] h-[43.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[76.833px] relative rounded-[20px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(169.335deg, rgba(81, 162, 255, 0.2) 0%, rgba(0, 211, 242, 0.2) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(142,197,255,0.4)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex flex-col items-start pb-[0.667px] pt-[16.667px] px-[16.667px] relative size-full">
        <Container114 />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[254.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container111 />
      <Container115 />
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1494.5px] items-start left-0 pb-0 pt-[24px] px-[20px] top-[256px] w-[448px]" data-name="Container">
      <Container36 />
      <Container63 />
      <Container83 />
      <Container103 />
      <Container116 />
    </div>
  );
}

function ImageSelfDriveVehicles() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[448px]" data-name="Image (Self-drive vehicles)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageSelfDriveVehicles} />
    </div>
  );
}

function Container118() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,105,0,0.5)] h-[256px] left-0 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[rgba(254,154,0,0.4)] w-[448px]" data-name="Container" />;
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[27.708px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.33px]">9:41</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[12px] relative rounded-[6px] shrink-0 w-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Container120() {
  return <div className="bg-white flex-[1_0_0] h-[12px] min-h-px min-w-px rounded-[6px]" data-name="Container" />;
}

function Container121() {
  return (
    <div className="h-[12px] relative shrink-0 w-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        {[...Array(2).keys()].map((_, i) => (
          <Container119 key={i} />
        ))}
        <Container120 />
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-center justify-between left-[20px] top-[32px] w-[408px]" data-name="Container">
      <Text26 />
      <Container121 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[22369600px] shrink-0 size-[45.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[10.667px] px-[10.667px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
        <div className="absolute inset-[-100.03%_-28.87%_-100.01%_-28.87%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.46433 3.00008">
            <path d={svgPaths.p5ce7600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9996 17">
            <path d={svgPaths.p3337a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] relative rounded-[22369600px] shrink-0 size-[45.333px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[22369600px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[10.667px] px-[10.667px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute content-stretch flex h-[45.333px] items-center justify-between left-[20px] top-[84px] w-[408px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36.396px] left-[20px] top-[153.33px] w-[408px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36.4px] left-0 not-italic text-[28px] text-white top-[-0.33px] tracking-[-0.084px]">Self-Drive Vehicles</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.66667" style={{ stroke: "white", strokeOpacity: "0.9" }} />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="1.66667" style={{ stroke: "white", strokeOpacity: "0.9" }} />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[21px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)]">{`Pickup location & dates...`}</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.4)] content-stretch flex gap-[12px] h-[50.333px] items-center left-[20px] px-[16.667px] py-[0.667px] rounded-[20px] top-[205.73px] w-[408px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon13 />
      <TextInput />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute h-[288.063px] left-0 top-0 w-[448px]" data-name="Container">
      <Container122 />
      <Container123 />
      <Heading />
      <Container124 />
    </div>
  );
}

function Container126() {
  return (
    <div className="absolute h-[256px] left-0 overflow-clip top-0 w-[448px]" data-name="Container">
      <ImageSelfDriveVehicles />
      <Container118 />
      <Container125 />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[1750.5px] left-[245px] top-0 w-[448px]" data-name="Container">
      <Container117 />
      <Container126 />
    </div>
  );
}

function SelfDriveScreen() {
  return (
    <div className="absolute h-[1750.5px] left-0 overflow-clip top-0 w-[938px]" data-name="SelfDriveScreen" style={{ backgroundImage: "linear-gradient(118.184deg, rgb(255, 237, 212) 0%, rgb(255, 251, 235) 50%, rgb(254, 249, 194) 100%)" }}>
      <Container />
      <Container1 />
      <Container2 />
      <Container127 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[24px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-11.11%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
              <path d={svgPaths.p3ff7f900} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.34%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.26%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.9995">
              <path d={svgPaths.p282f8f00} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.4157 0.4471 0.5098)", strokeOpacity: "1" }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[17.5px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Home</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[7.14px] px-0 py-[8px] rounded-[14px] top-0 w-[58.156px]" data-name="Button">
      <Icon14 />
      <Text27 />
    </div>
  );
}

function Icon15() {
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

function Text28() {
  return (
    <div className="h-[16px] relative shrink-0 w-[40.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[20.5px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Search</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[79.57px] px-0 py-[8px] rounded-[14px] top-0 w-[64.75px]" data-name="Button">
      <Icon15 />
      <Text28 />
    </div>
  );
}

function Icon16() {
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

function Button19() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[158.6px] rounded-[22369600px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-[60px] top-[-16px]" data-name="Button" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(254, 154, 0) 100%)" }}>
      <Icon16 />
    </div>
  );
}

function Icon17() {
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

function Text29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[34.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[17px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Alerts</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[232.89px] px-0 py-[8px] rounded-[14px] top-0 w-[58.688px]" data-name="Button">
      <Icon17 />
      <Text29 />
    </div>
  );
}

function Icon18() {
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

function Text30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[37.667px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[19px] not-italic text-[#6a7282] text-[12px] text-center top-[0.67px] translate-x-[-50%]">Profile</p>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[60px] items-center left-[305.85px] px-0 py-[8px] rounded-[14px] top-0 w-[61.667px]" data-name="Button">
      <Icon18 />
      <Text30 />
    </div>
  );
}

function Container128() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
    </div>
  );
}

function SelfDriveScreen1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col h-[85.333px] items-start left-[265px] pb-[0.667px] pt-[12.667px] px-[16.667px] rounded-[28px] top-[802px] w-[408px]" data-name="SelfDriveScreen">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[28px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container128 />
    </div>
  );
}

export default function Travelessentials() {
  return (
    <div className="bg-white relative size-full" data-name="travelessentials">
      <SelfDriveScreen />
      <SelfDriveScreen1 />
    </div>
  );
}
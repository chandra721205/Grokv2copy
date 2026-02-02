import svgPaths from "./svg-y5jnwf8noy";

function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p1b38280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[398.67px] rounded-[24px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] size-[96px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[893.333px]" data-name="Heading 1">
      <p className="absolute css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[50px] left-[446.96px] not-italic text-[#212121] text-[40px] text-center top-[-1px] translate-x-[-50%]">Adventure Tourism</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[35px] left-0 top-[70px] w-[768px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-[383.59px] not-italic text-[#616161] text-[20px] text-center top-0 translate-x-[-50%]">{`Thrilling experiences across India’s mountains, rivers, deserts & wildlife sanctuaries`}</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[105px] left-0 top-[120px] w-[893.333px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[225px] left-[24px] top-[128px] w-[893.333px]" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[40px] top-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p32865500} fill="var(--fill-0, #1A237E)" id="Vector" stroke="var(--stroke-0, #1A237E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" style={{ fill: "color(display-p3 0.1020 0.1373 0.4941)", fillOpacity: "1", stroke: "color(display-p3 0.1020 0.1373 0.4941)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Segoe_UI:Semibold',sans-serif] h-[80px] leading-[40px] left-[56px] not-italic text-[#212121] text-[32px] top-0 w-[160.625px]" data-name="Heading 2">
      <p className="absolute css-ew64yg left-0 top-[0.67px]">Safety First</p>
      <p className="absolute css-ew64yg left-0 top-[40.67px]">Adventure</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[96px] relative shrink-0 w-[265.292px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(26,35,126,0.2)] border-r-[0.667px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex h-[18.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1a237e] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        ✓
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(26,35,126,0.1)] content-stretch flex flex-col h-[38px] items-start left-0 pb-0 pt-[11.333px] px-[4px] rounded-[22369600px] top-[4px] w-[18.49px]" data-name="Container">
      <Text />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Certified Guides</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[210px]">Expert instructors for all activities</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[137px] items-start left-[30.49px] top-0 w-[209.51px]" data-name="Container">
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[176px] left-0 top-0 w-[240px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[18.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1a237e] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        ✓
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(26,35,126,0.1)] content-stretch flex flex-col h-[38px] items-start left-0 pb-0 pt-[11.333px] px-[4px] rounded-[22369600px] top-[4px] w-[18.49px]" data-name="Container">
      <Text1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[136px]">Safety Gear Included</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[205px]">Helmets, harnesses, life jackets</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[30.49px] top-0 w-[209.51px]" data-name="Container">
      <Heading3 />
      <Paragraph2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[176px] left-[272px] top-0 w-[240px]" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[18.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Bold','Noto_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#1a237e] text-[14px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 700" }}>
        ✓
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(26,35,126,0.1)] content-stretch flex flex-col h-[38px] items-start left-0 pb-0 pt-[11.333px] px-[4px] rounded-[22369600px] top-[4px] w-[18.49px]" data-name="Container">
      <Text2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[155px]">24/7 Medical Support</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[156px]">{`First-aid & rescue teams`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[176px] items-start left-[30.49px] top-0 w-[209.51px]" data-name="Container">
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[176px] left-0 top-[208px] w-[240px]" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="flex-[1_0_0] h-[384px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container6 />
        <Container9 />
        <Container12 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[48px] h-[384px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#ffd700] h-[448px] items-start left-[24px] pb-0 pt-[32px] px-[32px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#fbc02d] top-[401px] w-[893.333px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[40px] left-0 not-italic text-[#212121] text-[32px] top-[0.67px]">Choose Your Adventure</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">🥾</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[190px]">{`Trekking & Mountaineering`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Himalayan peaks, hill trails</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[141px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading6 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[141px] items-start left-[24px] top-[24px] w-[382.667px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Moderate</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 50+ trails</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[110.667px] items-start left-[24px] pb-0 pt-[8.667px] px-0 top-[189px] w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Container20() {
  return <div className="bg-white rounded-[22369600px] shrink-0 size-[10px]" data-name="Container" />;
}

function Container21() {
  return (
    <div className="absolute bg-[#283593] content-stretch flex items-center justify-center left-[382.67px] rounded-[22369600px] size-[24px] top-[24px]" data-name="Container">
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-white border-2 border-[#283593] border-solid h-[327.667px] left-0 rounded-[24px] shadow-[0px_0px_0px_1px_#283593,0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[434.667px]" data-name="Container">
      <Container18 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">🚣</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Water Sports</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Rafting, Scuba, Kayaking</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[102px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading7 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[102px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Easy to Extreme</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 30+ locations</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8.667px] px-0 relative size-full">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[327.667px] items-start left-[458.67px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[24px] top-0 w-[434.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">🦁</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">{`Wildlife & Safaris`}</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">National parks, tiger reserves</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[102px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading8 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[102px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Easy</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 40+ parks</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8.667px] px-0 relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[288.667px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[24px] top-[351.67px] w-[434.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">🪂</p>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Air Adventure</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Paragliding, Bungee, Zipline</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[102px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading9 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[102px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Moderate to Hard</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 20+ sites</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8.667px] px-0 relative size-full">
        <Paragraph14 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[288.667px] items-start left-[458.67px] pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[24px] top-[351.67px] w-[434.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[640.333px] relative shrink-0 w-full" data-name="Container">
      <Container22 />
      <Container27 />
      <Container32 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">🏜️</p>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">{`Desert & Camping`}</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Desert safaris, stargazing</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="flex-[1_0_0] h-[102px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading10 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[102px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Easy to Moderate</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 15+ deserts</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[110.667px] relative shrink-0 w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[8.667px] px-0 relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[327.667px] items-start left-0 pb-[2px] pl-[26px] pr-[2px] pt-[26px] rounded-[24px] top-0 w-[434.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[#e8eaf6] relative rounded-[32px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#212121] text-[30px]">👴</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[281px]">Soft Adventure – Senior Friendly</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Senior friendly, low impact</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[1_0_0] h-[141px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading11 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[141px] items-start left-[24px] top-[24px] w-[382.667px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Difficulty: Easy</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">Destinations: 60+ options</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[110.667px] items-start left-[24px] pb-0 pt-[8.667px] px-0 top-[189px] w-[382.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-solid border-t-[0.667px] inset-0 pointer-events-none" />
      <Paragraph20 />
      <Paragraph21 />
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute bg-[#f6339a] content-stretch flex h-[24px] items-start left-[321.83px] px-[12px] py-[4px] rounded-bl-[16.4px] rounded-tr-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[108.833px]" data-name="Container">
      <p className="css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white">Senior Friendly</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute bg-white border-2 border-[rgba(0,0,0,0)] border-solid h-[327.667px] left-[458.67px] rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[434.667px]" data-name="Container">
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[327.667px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[1048px] items-start left-[24px] top-[897px] w-[893.333px]" data-name="Container">
      <Heading5 />
      <Container38 />
      <Container50 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#212121] text-[32px]">👴 Senior Friendly Adventure Options</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">🚙</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Jeep Safaris</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[284px]">Comfortable wildlife viewing, no walking required</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[137px] relative shrink-0 w-[324.375px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading13 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[12px] h-[137px] items-start relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[170.333px] items-start left-0 pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[16.4px] top-0 w-[402.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container53 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">🚶</p>
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Easy Nature Walks</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[323px]">Flat terrain, short distances (1–3 km), rest stops</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[137px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading14 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex gap-[12px] h-[137px] items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[170.333px] items-start left-[426.67px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[16.4px] top-0 w-[402.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container56 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">🛥️</p>
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Calm Boat Rides</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[35px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0">River cruises, lake tours, no rapids</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[102px] relative shrink-0 w-[297.354px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading15 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[12px] h-[102px] items-start relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Container58 />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[170.333px] items-start left-0 pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[16.4px] top-[194.33px] w-[402.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container59 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[32px] relative shrink-0 w-[32.958px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Segoe_UI:Regular',sans-serif] leading-[32px] min-h-px min-w-px not-italic relative text-[24px] text-white">📸</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0">Scenic Drives</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[308px]">Mountain roads, viewpoints, photo stops</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] h-[137px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading16 />
        <Paragraph25 />
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[12px] h-[137px] items-start relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col h-[170.333px] items-start left-[426.67px] pb-[0.667px] pt-[16.667px] px-[16.667px] rounded-[16.4px] top-[194.33px] w-[402.667px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[364.667px] relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container57 />
      <Container60 />
      <Container63 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#f48fb1] gap-[16px] h-[484.667px] items-start left-[24px] pb-0 pt-[32px] px-[32px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#ec407a] top-[1993px] w-[893.333px]" data-name="Container">
      <Heading12 />
      <Container64 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#212121] text-[32px]">{`⚠️ Health & Safety Guidelines`}</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[28px] left-0 top-[50.5px] w-[24.719px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#3e2723] text-[18px] top-0">🏔️</p>
    </div>
  );
}

function Heading18() {
  return (
    <div className="absolute h-[117px] left-[32.72px] top-0 w-[227.719px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[162px]">High-Altitude Adventures (3000m+)</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[129px] relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Heading18 />
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[140px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[250px]">Health screening mandatory for 60+ years | Oxygen support available | Acclimatization required</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[297px] items-start left-0 top-0 w-[260.438px]" data-name="Container">
      <Container66 />
      <Paragraph26 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[28px] left-0 top-[31px] w-[24.719px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#3e2723] text-[18px] top-0">💊</p>
    </div>
  );
}

function Heading19() {
  return (
    <div className="absolute h-[78px] left-[32.72px] top-0 w-[227.729px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[181px]">Medical Fitness Required</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Heading19 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[140px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[237px]">{`Doctor's certificate needed for extreme activities | Heart/BP patients: consult before booking`}</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[297px] items-start left-[284.44px] top-0 w-[260.448px]" data-name="Container">
      <Container68 />
      <Paragraph27 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[28px] left-0 top-[31px] w-[24.719px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[28px] left-0 not-italic text-[#3e2723] text-[18px] top-0">🩺</p>
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[78px] left-[32.72px] top-0 w-[227.719px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[191px]">Age Restrictions Apply</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Heading20 />
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[105px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[259px]">Bungee: 18-45 yrs | Scuba: 10-60 yrs | Trekking: varies by difficulty</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[297px] items-start left-[568.89px] top-0 w-[260.438px]" data-name="Container">
      <Container70 />
      <Paragraph28 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[297px] relative shrink-0 w-full" data-name="Container">
      <Container67 />
      <Container69 />
      <Container71 />
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#ffcc80] gap-[16px] h-[417px] items-start left-[24px] pb-0 pt-[32px] px-[32px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#fb8c00] top-[2525.67px] w-[893.333px]" data-name="Container">
      <Heading17 />
      <Container72 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Heading 2">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#212121] text-[32px]">🤖 Grok Adventure Recommendations</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-0 top-[4px] w-[119.427px]" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#616161] text-[20px]">Best seasons:</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <Text10 />
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[790px]">Trekking (May–Jun, Sep–Oct), Rafting (Mar–Jun, Sep–Nov), Scuba (Oct–Apr), Wildlife (Oct–Jun, avoid monsoon).</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-0 top-[4px] w-[162.333px]" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#616161] text-[20px]">Beginner-friendly:</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <Text11 />
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[829px]">Rishikesh rafting (₹1,500), Bir paragliding (₹2,500), Ranthambore jeep safari (₹3,000).</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[26.667px] items-start left-0 top-[4px] w-[136.76px]" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[35px] not-italic relative shrink-0 text-[#616161] text-[20px]">Senior options:</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[70px] opacity-90 relative shrink-0 w-full" data-name="Paragraph">
      <Text12 />
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[792px]">Jim Corbett jeep safari (easy terrain, medical support on-site). Book 15–30 days ahead for best guides!</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[242px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph29 />
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#3f51b5] gap-[16px] h-[378px] items-start left-[24px] pb-0 pt-[32px] px-[32px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#1a237e] top-[2990.67px] w-[893.333px]" data-name="Container">
      <Heading21 />
      <Container74 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[28px] left-0 top-[31px] w-[27.469px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#212121] text-[20px] top-[0.67px]">🤖</p>
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[78px] left-[35.47px] top-0 w-[432.021px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Semibold',sans-serif] leading-[39px] left-0 not-italic text-[#212121] text-[26px] top-0 w-[389px]">Plan a multi category combo trip with Grok</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[90px] relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Heading22 />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-0 not-italic text-[#616161] text-[20px] top-0 w-[453px]">Use our 3 step wizard to match your group, budget and pace.</p>
    </div>
  );
}

function Container77() {
  return (
    <div className="flex-[1_0_0] h-[180px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container76 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[349.84px] size-[12px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M2.5 6H9.5" id="Vector" stroke="var(--stroke-0, #312C85)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1916 0.1726 0.5227)", strokeOpacity: "1" }} />
          <path d="M6 2.5L9.5 6L6 9.5" id="Vector_2" stroke="var(--stroke-0, #312C85)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.1916 0.1726 0.5227)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[64px] relative rounded-[22369600px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[377.844px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[30px] left-[181.5px] not-italic text-[#312c85] text-[20px] text-center top-[17.33px] translate-x-[-50%]">🤖 Create Your Custom Combo Tour</p>
        <Icon2 />
      </div>
    </div>
  );
}

function CustomComboCta() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex from-[#312c85] h-[212px] items-center justify-between left-[24px] px-[16px] py-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#193cb8] top-[3392.67px] w-[893.333px]" data-name="CustomComboCTA">
      <Container77 />
      <Button />
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[35px] left-[24px] top-[3611.96px] w-[893.333px]" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[35px] left-[446.97px] not-italic text-[#616161] text-[20px] text-center top-0 translate-x-[-50%]">Scroll for more ↓</p>
    </div>
  );
}

function AdventureTourismScreen() {
  return (
    <div className="absolute bg-[#f5f9ff] h-[3911.667px] left-0 top-0 w-[941.333px]" data-name="AdventureTourismScreen">
      <Container2 />
      <Container15 />
      <Container51 />
      <Container65 />
      <Container73 />
      <Container75 />
      <CustomComboCta />
      <Paragraph33 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, #1A237E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "color(display-p3 0.1020 0.1373 0.4941)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[28px] left-[19.5px] not-italic text-[#1a237e] text-[18px] text-center top-0 translate-x-[-50%]">Back</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[64px] relative rounded-[10px] shrink-0 w-[94.188px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[12px] py-0 relative size-full">
        <Icon3 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex h-[26.667px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="css-ew64yg font-['Segoe_UI:Bold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#1a237e] text-[20px]">Adventure Tourism</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-white h-[47.333px] relative rounded-[22369600px] shrink-0 w-[228.542px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#f3f4f6] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[22369600px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.667px] pt-[10px] px-[24.667px] relative size-full">
        <Text15 />
      </div>
    </div>
  );
}

function Container79() {
  return <div className="h-0 shrink-0 w-[80px]" data-name="Container" />;
}

function Container80() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function AdventureTourismScreen1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] content-stretch flex flex-col h-[96px] items-start left-0 pb-0 pt-[16px] px-[24px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[400px] w-[941.333px]" data-name="AdventureTourismScreen">
      <Container80 />
    </div>
  );
}

function AdventureTourismScreen2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[82.458px]" data-name="AdventureTourismScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[30px] left-[41.5px] not-italic text-[#1a237e] text-[20px] text-center top-[0.33px] translate-x-[-50%]">Continue</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#ffd700] h-[64px] items-center justify-center left-[746.88px] rounded-[22369600px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[#ffc107] top-[923.33px] w-[162.458px]" data-name="Button">
      <AdventureTourismScreen2 />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[20px] left-0 not-italic text-[#f93] text-[14px] top-[-0.33px]">Screen:</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[86.115px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[-0.33px]">cat-adventure</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[5.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Segoe_UI:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.33px]">•</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[12px] top-[26px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M7.5 9L4.5 6L7.5 3" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "color(display-p3 0.0824 0.3647 0.9882)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon4 />
        <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[30px] left-[37.5px] not-italic text-[#155dfc] text-[20px] text-center top-[17.33px] translate-x-[-50%]">Back</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[8px] h-[64px] items-center relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
      <Text18 />
      <Button3 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.95)] content-stretch flex flex-col h-[81.333px] items-start left-[16px] pb-[0.667px] pt-[8.667px] px-[16.667px] rounded-[16.4px] top-[416px] w-[258.823px]" data-name="App">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0.667px] border-solid inset-0 pointer-events-none rounded-[16.4px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <Container81 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 2H14V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M14 2L9.33333 6.66667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M2 14L6.66667 9.33333" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
          <path d="M6 14H2V10" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f93] h-[64px] left-[751.45px] rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] to-[#ffd700] top-[416px] w-[173.885px]" data-name="App">
      <Icon5 />
      <p className="absolute css-ew64yg font-['Segoe_UI:Semibold',sans-serif] leading-[30px] left-[99px] not-italic text-[20px] text-center text-white top-[17.33px] translate-x-[-50%]">Journey Map</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="1">
      <AdventureTourismScreen />
      <AdventureTourismScreen1 />
      <Button2 />
      <App />
      <App1 />
    </div>
  );
}
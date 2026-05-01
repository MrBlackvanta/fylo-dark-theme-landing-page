'use client';

import { useId } from 'react';

export default function BgCurvyDesktopSVG(props: React.SVGProps<SVGSVGElement>) {
  const uid = useId();
  const id = (key: string) => `${uid}-${key}`;
  const ref = (key: string) => `url(#${id(key)})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 449"
      {...props}
    ><defs><path id={id("a")} d="M0 0h1454v449H0z"/></defs><g transform="translate(-14)" fill="none" fillRule="evenodd"><mask id={id("b")} fill="#fff"><use xlinkHref={`#${id("a")}`}/></mask><path d="M14 413.954c90.836-5.359 176.206-50.375 256.111-135.046C389.968 151.9 364.01 105.164 563.005 148.686 762 192.207 745.05 163.699 873 63.13c127.95-100.57 211-77.554 289 44.667 78 122.222 151 162.895 284 207.778 88.667 29.921 92.03 848.285 10.091 2455.09H14V413.956z" fill="#181F2B" mask={ref("b")}/></g></svg>
  );
}

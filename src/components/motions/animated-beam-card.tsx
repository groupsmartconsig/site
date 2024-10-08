"use client";

import { AnimatedBeam } from "@/components/magic-ui/animated-beam";
import { cn } from "@/lib/utils";
import { LockIcon } from "lucide-react";
import React, { forwardRef, useRef } from "react";
import { BorderBeam } from "../magic-ui/border-beam";

import DotPattern from "../magic-ui/dot-pattern";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-gradient-to-br from-black to-zinc-900 relative h-[600px] overflow-hidden border-2 border-zinc-700 p-10 md:shadow-xl md:h-[500px] md:rounded-lg md:mx-0">
      <div className="flex flex-col items-center space-y-3 pb-10">
        <h5 className="flex items-center gap-2 text-2xl font-medium text-primary-red">
          <LockIcon className="size-6" />
          <strong className="text-white">100% seguro,</strong> {""}
          portabilidade é aqui
        </h5>
        <p className="text-white">
          Nossa empresa é regularizada pela ANEPS e autorizada pelo BACEN para atuar como correspondente bancário, assegurando a segurança e a legalidade dos nossos serviços.
        </p>
      </div>

      <div
        className="relative flex w-full items-center justify-center"
        ref={containerRef}
      >
        <div className="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.gmail />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.openai />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.facebook />
            </Circle>
            <Circle ref={div4Ref} className="size-16">
              <Icons.smart />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.instagram />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Icons.whatsapp />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.messenger />
            </Circle>
          </div>
        </div>

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div1Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div2Ref}
          toRef={div4Ref}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div3Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div5Ref}
          toRef={div4Ref}
          curvature={-75}
          endYOffset={-10}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div6Ref}
          toRef={div4Ref}
          reverse
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={div7Ref}
          toRef={div4Ref}
          curvature={75}
          endYOffset={10}
          reverse
        />
      </div>
      
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  );
}

const Icons = {
  facebook: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <path fill="#039be5" d="M24 5a19 19 0 100 38 19 19 0 100-38z"></path>
      <path
        fill="#fff"
        d="M26.572 29.036h4.917l.772-4.995h-5.69v-2.73c0-2.075.678-3.915 2.619-3.915h3.119v-4.359c-.548-.074-1.707-.236-3.897-.236-4.573 0-7.254 2.415-7.254 7.917v3.323h-4.701v4.995h4.701v13.729c.931.14 1.874.235 2.842.235.875 0 1.729-.08 2.572-.194v-13.77z"
      ></path>
    </svg>
  ),
  smart: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path fill="url(#pattern0_0_2)" d="M0 0H100V100H0z"></path>
      <defs>
        <pattern
          id="pattern0_0_2"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01)" xlinkHref="#image0_0_2"></use>
        </pattern>
        <image
          id="image0_0_2"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  ),
  openai: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  gmail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4caf50"
        d="M45 16.2l-5 2.75-5 4.75V40h7a3 3 0 003-3V16.2z"
      ></path>
      <path
        fill="#1e88e5"
        d="M3 16.2l3.614 1.71L13 23.7V40H6a3 3 0 01-3-3V16.2z"
      ></path>
      <path
        fill="#e53935"
        d="M35 11.2L24 19.45 13 11.2 12 17 13 23.7 24 31.95 35 23.7 36 17z"
      ></path>
      <path
        fill="#c62828"
        d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 003 12.298z"
      ></path>
      <path
        fill="#fbc02d"
        d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0145 12.298z"
      ></path>
    </svg>
  ),
  whatsapp: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 175.216 175.552"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        fill="#b3b3b3"
        filter="url(#a)"
      />
      <path
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
        fill="#ffffff"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
        fill="url(#linearGradient1780)"
      />
      <path
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
        fill="url(#b)"
      />
      <path
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
        fill="#ffffff"
        fillRule="evenodd"
      />
    </svg>
  ),
  instagram: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      x="0"
      y="0"
      viewBox="0 0 48 48"
    >
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
        cx="19.38"
        cy="42.035"
        r="44.899"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fd5"></stop>
        <stop offset="0.328" stopColor="#ff543f"></stop>
        <stop offset="0.348" stopColor="#fc5245"></stop>
        <stop offset="0.504" stopColor="#e64771"></stop>
        <stop offset="0.643" stopColor="#d53e91"></stop>
        <stop offset="0.761" stopColor="#cc39a4"></stop>
        <stop offset="0.841" stopColor="#c837ab"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
        d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
      ></path>
      <radialGradient
        id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
        cx="11.786"
        cy="5.54"
        r="29.813"
        gradientTransform="matrix(1 0 0 .6663 0 1.849)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#4168c9"></stop>
        <stop offset="0.999" stopColor="#4168c9" stopOpacity="0"></stop>
      </radialGradient>
      <path
        fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
        d="M34.017 41.99l-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
      ></path>
      <path
        fill="#fff"
        d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
      ></path>
      <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
      <path
        fill="#fff"
        d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
      ></path>
    </svg>
  ),
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
};

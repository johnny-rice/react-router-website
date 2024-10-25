import { type MetaFunction } from "react-router";
import { Await, Link, useLoaderData } from "react-router";
import { Suspense } from "react";

import iconsHref from "~/icons.svg";
import { getStats, type Stats } from "~/modules/stats";
import { getRootMatchData } from "~/ui/meta";

export let loader = async () => {
  const stats = await getStats();
  // replace with something better, just fixing types
  if (!stats) {
    throw new Error("Failed to load stats");
  }
  return { stats };
};

export const meta: MetaFunction = ({ matches }) => {
  let { isProductionHost } = getRootMatchData(matches);
  let robots = isProductionHost ? "index,follow" : "noindex, nofollow";
  return [
    { title: "React Router Official Documentation" },
    { name: "robots", content: robots },
    { name: "googlebot", content: robots },
  ];
};

function Logo() {
  return (
    <svg
      className="mx-auto w-full max-w-[500px]"
      viewBox="0 0 1080 174"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M231.527 86.9999C231.527 94.9642 228.297 102.173 223.067 107.387C217.837 112.606 210.614 115.835 202.634 115.835C194.654 115.835 187.43 119.059 182.206 124.278C176.977 129.498 173.741 136.707 173.741 144.671C173.741 152.635 170.51 159.844 165.281 165.058C160.051 170.277 152.828 173.507 144.847 173.507C136.867 173.507 129.644 170.277 124.42 165.058C119.19 159.844 115.954 152.635 115.954 144.671C115.954 136.707 119.19 129.498 124.42 124.278C129.644 119.059 136.867 115.835 144.847 115.835C152.828 115.835 160.051 112.606 165.281 107.387C170.51 102.173 173.741 94.9642 173.741 86.9999C173.741 71.0711 160.808 58.1643 144.847 58.1643C136.867 58.1643 129.644 54.9347 124.42 49.7155C119.19 44.502 115.954 37.2931 115.954 29.3287C115.954 21.3643 119.19 14.1555 124.42 8.93622C129.644 3.71698 136.867 0.493164 144.847 0.493164C160.808 0.493164 173.741 13.4 173.741 29.3287C173.741 37.2931 176.977 44.502 182.206 49.7155C187.43 54.9347 194.654 58.1643 202.634 58.1643C218.594 58.1643 231.527 71.0711 231.527 86.9999Z"
        fill="#F44250"
      />
      <path
        d="M115.954 86.9996C115.954 71.0742 103.018 58.1641 87.0608 58.1641C71.1035 58.1641 58.1676 71.0742 58.1676 86.9996C58.1676 102.925 71.1035 115.835 87.0608 115.835C103.018 115.835 115.954 102.925 115.954 86.9996Z"
        fill="currentColor"
      />
      <path
        d="M58.1676 144.671C58.1676 128.745 45.2316 115.835 29.2743 115.835C13.317 115.835 0.381104 128.745 0.381104 144.671C0.381104 160.596 13.317 173.506 29.2743 173.506C45.2316 173.506 58.1676 160.596 58.1676 144.671Z"
        fill="currentColor"
      />
      <path
        d="M289.313 144.671C289.313 128.745 276.378 115.835 260.42 115.835C244.463 115.835 231.527 128.745 231.527 144.671C231.527 160.596 244.463 173.506 260.42 173.506C276.378 173.506 289.313 160.596 289.313 144.671Z"
        fill="currentColor"
      />
      <g clipPath="url(#clip0_171_1761)">
        <path
          d="M562.482 173.247C524.388 173.247 498.363 147.49 498.363 110.468C498.363 73.4455 524.388 47.6885 562.482 47.6885C600.576 47.6885 626.869 73.7135 626.869 110.468C626.869 147.222 600.576 173.247 562.482 173.247ZM562.482 144.007C579.386 144.007 587.703 130.319 587.703 110.468C587.703 90.6168 579.386 76.9289 562.482 76.9289C545.579 76.9289 537.529 90.6168 537.529 110.468C537.529 130.319 545.311 144.007 562.482 144.007Z"
          fill="currentColor"
        />
        <path
          d="M833.64 141.116C824.217 141.116 819.237 136.684 819.237 126.156V74.8983H851.928V47.7792H819.237V1.15527H791.75L786.1 26.1978C783.343 36.4805 780.82 42.822 773.897 46.0821C773.105 46.4506 771.129 46.9976 769.409 47.3884C768.014 47.701 766.596 47.8573 765.167 47.8573H752.338V47.9243H734.832C723.578 47.9243 714.445 57.0459 714.445 68.3111V111.552C714.445 130.599 707.199 142.668 692.719 142.668C678.238 142.668 672.868 133.279 672.868 116.375V47.9243H634.249V125.765C634.249 151.254 644.442 173.248 676.63 173.248C691.915 173.248 703.895 167.231 711.096 157.182C712.145 155.72 714.445 156.49 714.445 158.276V170.022H753.332V83.8412C753.332 78.8953 757.34 74.8871 762.286 74.8871H779.882V136.952C779.882 164.663 797.89 173.248 817.842 173.248C833.908 173.248 844.436 169.374 853.58 162.441V136.126C846.1 139.453 839.725 141.116 833.629 141.116H833.64Z"
          fill="currentColor"
        />
        <path
          d="M981.561 130.865C975.387 157.962 954.197 173.258 923.07 173.258C885.243 173.258 858.415 150.18 858.415 112.354C858.415 74.5281 885.779 47.6992 922.266 47.6992C961.699 47.6992 982.365 74.796 982.365 107.263V113.884H896.509C894.555 135.711 909.382 144.017 924.409 144.017C937.829 144.017 946.136 138.915 950.434 127.918L981.561 130.865ZM945.075 94.9372C944.271 83.1361 936.757 75.8567 921.998 75.8567C906.434 75.8567 899.188 82.321 897.045 94.9372H945.064H945.075Z"
          fill="currentColor"
        />
        <path
          d="M1076.24 85.7486C1070.06 82.2652 1064.17 80.9142 1055.85 80.9142C1039.75 80.9142 1029.02 90.0358 1029.02 110.691V170.02H990.393V47.9225H1029.02V64.3235C1029.02 65.4623 1030.54 65.8195 1031.05 64.8035C1036.68 53.5718 1047.91 44.707 1062.03 44.707C1069.27 44.707 1075.45 46.8507 1078.66 49.5414L1076.25 85.7597L1076.24 85.7486Z"
          fill="currentColor"
        />
        <path
          d="M547.321 31.5345V23.9983H522.457V31.5345H515.378V2.23828H542.14C553.562 2.23828 554.366 2.95282 554.366 13.1239C554.366 17.4111 553.472 18.5611 551.329 19.6553L549.408 20.6378L551.318 21.6426C553.595 22.8372 554.366 23.2391 554.366 30.0273V31.5345H547.332H547.321ZM522.457 18.3601H547.321V7.88763H522.457V18.349V18.3601Z"
          fill="currentColor"
        />
        <path
          d="M578.493 2.23828H610.826V7.90996H580.067V14.5083H610.011V19.2868H580.067V25.8963H610.837V31.501L578.504 31.5345C575.344 31.5345 572.787 28.9778 572.787 25.8293V7.95462C572.787 4.80617 575.344 2.24945 578.493 2.24945V2.23828Z"
          fill="currentColor"
        />
        <path
          d="M655.562 31.5345L653.151 26.3429H633.747L631.335 31.5345H624.58L637.007 4.75034C637.71 3.22078 639.262 2.23828 640.937 2.23828H645.927C647.613 2.23828 649.154 3.22078 649.857 4.75034L662.284 31.5345H655.529H655.562ZM643.46 8.06627C642.712 8.06627 642.053 8.49053 641.729 9.17158L635.968 21.5756H650.94L645.19 9.17158C644.878 8.49053 644.208 8.06627 643.46 8.06627Z"
          fill="currentColor"
        />
        <path
          d="M694.862 32.4153C676.05 32.4153 675.313 32.4153 675.313 16.8852C675.313 1.35505 676.05 1.36621 694.862 1.36621C711.721 1.36621 713.764 2.06959 714.244 10.5325H707.333V7.01556H682.168V26.766H707.333V23.2714H714.244C713.775 31.7119 711.721 32.4153 694.862 32.4153Z"
          fill="currentColor"
        />
        <path
          d="M745.282 31.5345V7.02795H729.16V2.23828H768.148V7.02795H752.026V31.5345H745.282Z"
          fill="currentColor"
        />
        <path
          d="M454.419 169.819C450.935 165.264 448.792 154.814 447.452 137.397C446.112 118.104 437.806 113.817 422.532 113.817H392.254V169.83H347.494V0.986328H432.715C476.391 0.986328 498.106 21.6187 498.106 54.5882C498.106 79.2399 482.833 95.3171 462.201 98.0078C479.618 101.491 489.8 111.405 491.676 130.966C494.087 156.154 494.891 163.656 500.518 169.819H454.419ZM424.676 78.704C443.969 78.704 453.615 73.8808 453.615 58.3395C453.615 44.6739 443.969 37.4392 424.676 37.4392H392.254V78.7152H424.676V78.704Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_171_1761">
          <rect
            width="731.156"
            height="172.261"
            fill="white"
            transform="translate(347.494 0.986328)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Home() {
  let { stats } = useLoaderData<typeof loader>();
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 p-4 lg:p-8">
      <h1 className="mt-12 w-full">
        <Logo />
      </h1>
      <div className="max-w-lg text-center ">
        <p className="text-2xl text-gray-500 dark:text-gray-200">
          React Router is a stable,{" "}
          <b className="text-black dark:text-white">user-obsessed</b>,{" "}
          <b className="text-black dark:text-white">standards-focused</b>,
          centerstack React frameworbrary you can{" "}
          <b className="text-black dark:text-white">deploy anywhere</b>
        </p>
      </div>
      <div className="flex w-96 gap-4">
        <Link
          reloadDocument
          to="/guides"
          className="w-1/2 rounded-lg bg-red-500 px-6 py-3 text-center text-white shadow-lg hover:bg-red-600"
        >
          Guides
        </Link>
        <Link
          reloadDocument
          to="/api"
          className="w-1/2 rounded-lg bg-red-500 px-6 py-3 text-center text-white shadow-lg hover:bg-red-600"
        >
          API Reference
        </Link>
      </div>
      <div className="max-w-lg text-center ">
        <p className="mt-4 text-gray-500 dark:text-gray-300">
          Version 7 is everything you know and love about React Router now with
          optional, incrementally-adoptable features like code splitting, data
          loading, mutations, server rendering, pending states, optimistic UI,
          and more
        </p>
      </div>
      <div>
        <Suspense fallback={null}>
          <Await resolve={stats} errorElement={null}>
            {(stats: Stats[]) => (
              <ul className="mt-8 grid grid-cols-1 gap-8 md:grid md:grid-cols-2">
                {/* TODO: single fetch bug? */}
                {stats.map(({ svgId, count, label }) => (
                  <li key={svgId} className="flex gap-4">
                    <svg
                      aria-label="TODO GitHub Octocat logo"
                      className="mt-1 h-8 w-8 text-gray-200 dark:text-gray-600"
                    >
                      <use href={`${iconsHref}#${svgId}`} />
                    </svg>
                    <p className="flex flex-col">
                      <span className="text-3xl font-light tracking-tight">
                        {count?.toLocaleString("en-US")}
                      </span>
                      <span className="text-gray-300 dark:text-gray-500">
                        {label}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
}

import * as React from "react"
import { SVGProps } from "react"

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h40v40H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01111)" />
      </pattern>
      <image
        id="b"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADVUlEQVR4nO2cO28TURCFVwriUYCgBUQFBXTQhH8ADfRIUNBQ8Shp6QjwC6goQPRQQUXHowGEgu+xKSIiSITvhACRCBLMDtrIJCZOiInXe2fHc6Rpknj3nG8nY4925SxzuVwul8vlcnVpakq2B+IbIJ4B8Wwgnih+1v03rgEVouwNkZ+DcumuQPxy8rMcGPT4rizLWm05isjvV0NeKf7YJBl3WAMIUc4F4sX1IS939iKinO3nmJMiW1dG0N8XrBhHxe9H5qKJyBiIb20EeI3uvlm89l/HLmBucNEmslFQiLITxA/+H3KnIj+ampfd6x2/t5N7LtZsZl2Tn+RgiNzYNOQVWK0myeG1ztHP6zPLCnNyIkSeHxzyMuxvIcqp1ecZadAhygVE/lke5M68jfwLUa5mow661ZJtiHynbMBrdPf96WnZMZKgwzpLyLDqz3IzUqCbJOPF59aqIHd1dl/nzCyo0ZYzgfh79ZD7r6zOEpGxjZYFLZXVfAl5mBqgadBv23KonCXEQVe4hOTe0T2QSa4sLQwKwMHi6OjcCbmbGhYGKPV3bqpeQjCkUn3nptGWYyHydGpIKK14pkFyPNOkOiwh2Fxn/wgk51PzrdUSgsG6+/YTkS1JILdIdtVpCcGgFfnxmy+yp1LIdVxCUE5nv2uRHKkEMubkZB2XEJR75+b0UCHXeQlBiRUi5yHytdIBF886gPhe6oBQVsViVupzIIH4eupQUFoFm9JAp7kbktekeMZBUwUdHflDaaBHYynJ04+OzoOBEz5C8jQPRabuJlRcQwfqoHMHDe/o9P/q8NGRJ4fmM5rSA/U3Q3LQybsN3tHpAfnooF4Imj/jl7+JGAgDxd5MhYFib6bCQLE3U2Gg2JupMFDszVQYKPZmKgwUezMVBoq9mQoDxd5MhYFib6bCQLE3U2Gg2JupMFDszVQYKPZmKgwUezMVBoq9mQoDxd5MhYFib6bCQLE3U2Gg2JupMFDszVQYKPZmKgwUe9tEGF4YRiAorBD5azLQIfKL1ABQVUV+lg40yeXkAKiaapBcTPrdoiHy69QQMOQKxK+Sf1N6i2S/ZdiB+FWTZF+mQUudTXKpmGM23iB5AZGfFuMieSe7XC6Xy+VyuVwul8vlcmX69BuKDCgJ+0n2CwAAAABJRU5ErkJggg=="
      />
    </defs>
  </svg>
)

export default HomeIcon

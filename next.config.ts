import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: { //fetch 요청 URL을 로그에 출력
    fetches: {
      fullUrl: true,
    },
  },
  typescript: {
    ignoreBuildErrors: true, // 타입 오류 무시하고 build 강제 통과
  },
  images:{
    domains: ["shopping-phinf.pstatic.net"],
  }
};

export default nextConfig;

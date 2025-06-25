import React from "react";
import Container from "../layout/Container";

export default function Features() {
  return (
    <div className="bg-c-bg relative w-full">
      <div className="absolute -bottom-20 -left-10 m-auto bg-c-color/10 w-[350px] h-[350px] blur-[80px] rounded-full"></div>
      <Container>
        <div className="w-full p-6 md:py-20 z-10 flex flex-col justify-center items-center">
          <h2 className="text-xl md:text-3xl font-semibold font-bricolage text-center mb-8 text-white">
            Core Features
          </h2>
          <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            <div className="text-white p-10 rounded-2xl border border-white/20 overflow-hidden relative max-w-[360px] h-[360px] flex flex-col justify-end items-center gap-6">
              <div className="absolute top-0 right-0 mx-auto w-[120px] h-[120px] bg-c-color/20 rounded-full blur-[60px]"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-4 h-[160px] items-center w-full flex gap-3 justify-center">
                  <img src="/arb.svg" alt="" className="w-12" />
                  <img src="/op.svg" alt="" className="w-12" />
                  <img src="/base.svg" alt="" className="w-12" />
                </div>
                <h3 className="text-lg font-semibold">Multi-Chain Support</h3>
                <p className="text-white/50 text-center text-sm">
                  Effortless payroll on Optimism, Arbitrum & Base.
                </p>
              </div>
            </div>
            <div className="text-white p-10 rounded-2xl border border-white/20 overflow-hidden relative max-w-[360px] h-[360px] flex flex-col justify-end items-center gap-6">
              <div className="absolute top-0 right-0 mx-auto w-[120px] h-[120px] bg-c-color/20 rounded-full blur-[60px]"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-4 h-[160px] items-center w-full flex gap-3 justify-center">
                  <img src="/usdt.svg" alt="" className="w-12" />
                  <img src="/usdc.svg" alt="" className="w-12" />
                </div>
                <h3 className="text-lg font-semibold">
                  Multi-Currency Payouts
                </h3>
                <p className="text-white/50 text-center text-sm">
                  Pay in USDC or USDT with live-locked rates.
                </p>
              </div>
            </div>
            <div className="text-white p-10 rounded-2xl border border-white/20 overflow-hidden relative max-w-[360px] h-[360px] flex flex-col justify-end items-center gap-6">
              <div className="absolute top-0 right-0 mx-auto w-[120px] h-[120px] bg-c-color/20 rounded-full blur-[60px]"></div>
              <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-semibold">Custom Reporting</h3>
                <p className="text-white/50 text-center text-sm">
                  On-chain payroll insights, tailored reports on demand.
                </p>
              </div>
            </div>
            <div className="text-white p-10 rounded-2xl border border-white/20 overflow-hidden relative max-w-[360px] h-[360px] flex flex-col justify-end items-center gap-6">
              <div className="absolute top-0 right-0 mx-auto w-[120px] h-[120px] bg-c-color/20 rounded-full blur-[60px]"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="py-4 h-[160px] items-center w-full flex gap-3 justify-center">
                  <img src="/grid.svg" alt="" className="ml-4" />
                </div>
                <h3 className="text-lg font-semibold">
                  Batch Payroll Transactions
                </h3>
                <p className="text-white/50 text-center text-sm">
                  On-chain payroll insights, tailored reports on demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

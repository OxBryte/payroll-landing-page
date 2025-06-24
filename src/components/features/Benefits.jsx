import React from "react";

export default function Benefits() {
  return (
    <div className="w-full p-6 md:py-20 z-10 flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
        Key Benefits
      </h2>
      <div className="w-fit grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        <div className="bg-white p-10 rounded-2xl border border-gray-100 max-w-[360px] flex flex-col items-center gap-6">
          <img src="/time.svg" alt="" className="w-[240px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold">Save Time</h3>
            <p className="text-gray-500 text-center text-sm">
              One-click payroll runs—no more manual spreadsheets.
            </p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl border border-gray-100 max-w-[360px] flex flex-col items-center gap-6">
          <img src="/time.svg" alt="" className="w-[240px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold">Eliminate Errors</h3>
            <p className="text-gray-500 text-center text-sm">
              Automated tax calculations and real-time validation.
            </p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl border border-gray-100 max-w-[360px] flex flex-col items-center gap-6">
          <img src="/data.svg" alt="" className="w-[240px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold">Scale with Confidence</h3>
            <p className="text-gray-500 text-center text-sm">
              From 5 to 5,000 employees, we've got you covered.
            </p>
          </div>
        </div>
        <div className="bg-white p-10 rounded-2xl border border-gray-100 max-w-[360px] flex flex-col items-center gap-6">
          <img src="/time.svg" alt="" className="w-[240px]" />
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-lg font-semibold">Stay Compliant</h3>
            <p className="text-gray-500 text-center text-sm">
              Always up-to-date with local and global regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

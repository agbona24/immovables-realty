"use client";

import React, { useState, useEffect } from "react";
import { Calculator, TrendingUp, DollarSign, Calendar } from "lucide-react";

interface MortgageCalculatorProps {
  defaultPrice?: number;
}

export default function MortgageCalculator({ defaultPrice = 0 }: MortgageCalculatorProps) {
  const [propertyPrice, setPropertyPrice] = useState(defaultPrice);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(15);
  const [loanTerm, setLoanTerm] = useState(20);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    if (defaultPrice > 0) {
      setPropertyPrice(defaultPrice);
    }
  }, [defaultPrice]);

  useEffect(() => {
    calculateMortgage();
  }, [propertyPrice, downPaymentPercent, interestRate, loanTerm]);

  const calculateMortgage = () => {
    if (propertyPrice <= 0) return;

    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPayment;
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyInterestRate === 0) {
      const payment = loanAmount / numberOfPayments;
      setMonthlyPayment(payment);
      setTotalPayment(loanAmount);
      setTotalInterest(0);
    } else {
      const monthlyPaymentCalc =
        (loanAmount *
          (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const totalPaymentCalc = monthlyPaymentCalc * numberOfPayments;
      const totalInterestCalc = totalPaymentCalc - loanAmount;

      setMonthlyPayment(monthlyPaymentCalc);
      setTotalPayment(totalPaymentCalc);
      setTotalInterest(totalInterestCalc);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const downPaymentAmount = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPaymentAmount;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-brand-blue/10 p-3 rounded-xl">
          <Calculator className="w-6 h-6 text-brand-blue" />
        </div>
        <div>
          <h2 className="text-2xl font-montserrat font-bold text-brand-blue">
            Mortgage Calculator
          </h2>
          <p className="text-gray-600 text-sm">
            Calculate your estimated monthly payments
          </p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="space-y-6 mb-8">
        {/* Property Price */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Property Price (₦)
          </label>
          <input
            type="number"
            value={propertyPrice || ""}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-brand-blue focus:outline-none transition-colors"
            placeholder="Enter property price"
          />
        </div>

        {/* Down Payment */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Down Payment: {downPaymentPercent}% ({formatCurrency(downPaymentAmount)})
          </label>
          <input
            type="range"
            min="5"
            max="50"
            step="5"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Interest Rate: {interestRate}% per year
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5%</span>
            <span>30%</span>
          </div>
        </div>

        {/* Loan Term */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Loan Term: {loanTerm} years
          </label>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>5 years</span>
            <span>30 years</span>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-gradient-to-br from-brand-blue to-blue-800 rounded-xl p-6 text-white">
        <div className="text-center mb-6">
          <p className="text-sm opacity-90 mb-2">Estimated Monthly Payment</p>
          <p className="text-4xl font-montserrat font-bold">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4" />
              <p className="text-xs opacity-90">Loan Amount</p>
            </div>
            <p className="font-semibold text-lg">{formatCurrency(loanAmount)}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <p className="text-xs opacity-90">Total Payment</p>
            </div>
            <p className="font-semibold text-lg">{formatCurrency(totalPayment)}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4" />
              <p className="text-xs opacity-90">Total Interest</p>
            </div>
            <p className="font-semibold text-lg">{formatCurrency(totalInterest)}</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-brand-orange">Note:</span> This calculator provides estimates only.
          Actual mortgage terms may vary based on your credit score, lender policies, and market conditions.
          Contact us for personalized financing options.
        </p>
      </div>
    </div>
  );
}

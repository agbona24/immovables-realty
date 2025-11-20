"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, DollarSign } from "lucide-react";

interface CostItem {
  name: string;
  percentage?: number;
  fixed?: number;
  description: string;
}

const costItems: CostItem[] = [
  {
    name: "Property Price",
    description: "The agreed purchase price of the property",
  },
  {
    name: "Legal Fees",
    percentage: 5,
    description:
      "Lawyer's fees for handling documentation and due diligence (typically 5% of property value)",
  },
  {
    name: "Stamp Duty",
    percentage: 0.375,
    description:
      "Government stamp duty fee (0.375% in Ogun State, varies by state)",
  },
  {
    name: "Agent Commission",
    percentage: 5,
    description:
      "Real estate agent's commission (typically 5%, negotiable)",
  },
  {
    name: "Survey Fee",
    percentage: 1,
    description:
      "Land surveyor fees for property measurement and mapping (approximately 1%)",
  },
  {
    name: "Title Registration",
    fixed: 75000,
    description:
      "Government fee for Certificate of Occupancy (C of O) registration",
  },
  {
    name: "Development Levy",
    fixed: 50000,
    description: "Community development levy (varies by location)",
  },
];

const CostBreakdownTool = () => {
  const [propertyPrice, setPropertyPrice] = useState<string>("10000000");
  const [includeAgent, setIncludeAgent] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const numericPrice = parseFloat(propertyPrice) || 0;

  const calculateCost = (item: CostItem): number => {
    if (item.name === "Property Price") return numericPrice;
    if (item.name === "Agent Commission" && !includeAgent) return 0;
    if (item.percentage) return (numericPrice * item.percentage) / 100;
    if (item.fixed) return item.fixed;
    return 0;
  };

  const costs = costItems.map((item) => ({
    ...item,
    amount: calculateCost(item),
  }));

  const totalCost = costs.reduce((sum, item) => sum + item.amount, 0);
  const additionalCosts = totalCost - numericPrice;

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getPercentageOfTotal = (amount: number): number => {
    if (totalCost === 0) return 0;
    return (amount / totalCost) * 100;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-montserrat font-bold text-2xl text-brand-blue dark:text-white">
          Property Cost Breakdown
        </h2>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Show cost information"
        >
          <Info size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {showInfo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4"
        >
          <h3 className="font-semibold text-brand-blue dark:text-blue-400 mb-2">
            Understanding Property Purchase Costs
          </h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            When buying property in Nigeria, the total cost includes more than just
            the purchase price. This tool helps you estimate all associated costs:
          </p>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
            <li>
              • <strong>Legal Fees:</strong> Essential for title verification and
              documentation
            </li>
            <li>
              • <strong>Stamp Duty:</strong> Government tax on property transfers
            </li>
            <li>
              • <strong>Survey Fees:</strong> For accurate property measurement
            </li>
            <li>
              • <strong>Registration:</strong> For Certificate of Occupancy (C of O)
            </li>
          </ul>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
            Note: Percentages and fees shown are typical estimates. Actual costs may
            vary by location and specific circumstances. Consult with legal and real
            estate professionals for accurate figures.
          </p>
        </motion.div>
      )}

      {/* Property Price Input */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Property Purchase Price
        </label>
        <div className="relative">
          <DollarSign
            size={24}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="number"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(e.target.value)}
            placeholder="10,000,000"
            className="w-full pl-12 pr-4 py-4 text-2xl font-bold border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
            step="100000"
            min="0"
          />
        </div>
        <div className="flex items-center gap-3 mt-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeAgent}
              onChange={(e) => setIncludeAgent(e.target.checked)}
              className="w-5 h-5 text-brand-blue rounded focus:ring-2 focus:ring-brand-blue"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Include agent commission
            </span>
          </label>
        </div>
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-4 mb-8">
        {costs.map((item, index) => {
          const percentage = getPercentageOfTotal(item.amount);
          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                    {item.percentage && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                        {item.percentage}%
                      </span>
                    )}
                    {item.fixed && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full text-gray-600 dark:text-gray-400">
                        Fixed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.description}
                  </p>
                </div>
                <div className="text-right ml-4">
                  <div className="font-bold text-lg text-gray-900 dark:text-white">
                    {formatCurrency(item.amount)}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {percentage.toFixed(1)}%
                  </div>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`h-full rounded-full ${
                    item.name === "Property Price"
                      ? "bg-brand-blue"
                      : "bg-brand-orange"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Total Summary */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 rounded-2xl p-6 text-white">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm opacity-90 mb-1">Property Price</div>
            <div className="text-2xl font-bold">
              {formatCurrency(numericPrice)}
            </div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Additional Costs</div>
            <div className="text-2xl font-bold text-brand-orange">
              {formatCurrency(additionalCosts)}
            </div>
            <div className="text-xs opacity-75 mt-1">
              ({((additionalCosts / numericPrice) * 100 || 0).toFixed(1)}% of
              property price)
            </div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">Total Investment Needed</div>
            <div className="text-3xl font-bold">{formatCurrency(totalCost)}</div>
          </div>
        </div>
      </div>

      {/* Helpful Tips */}
      <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4">
        <h3 className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2 flex items-center gap-2">
          💡 Money-Saving Tips
        </h3>
        <ul className="text-sm text-yellow-800 dark:text-yellow-300 space-y-1">
          <li>
            • Negotiate agent commission - it's often negotiable and can sometimes
            be shared with the seller
          </li>
          <li>
            • Shop around for legal services - fees can vary significantly between
            lawyers
          </li>
          <li>
            • Consider buying directly from developers to potentially save on agent
            fees
          </li>
          <li>
            • Budget an extra 5-10% buffer for unexpected costs and contingencies
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CostBreakdownTool;

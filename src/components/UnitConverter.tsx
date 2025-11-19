"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Info } from "lucide-react";

type UnitType = "sqm" | "plot" | "acre" | "hectare";

interface Unit {
  id: UnitType;
  name: string;
  fullName: string;
  toSqm: number; // Conversion factor to square meters
}

const units: Unit[] = [
  {
    id: "sqm",
    name: "m²",
    fullName: "Square Meters",
    toSqm: 1,
  },
  {
    id: "plot",
    name: "Plot",
    fullName: "Plot (Standard)",
    toSqm: 500, // Standard Nigerian plot is approximately 500 sqm (50ft x 100ft)
  },
  {
    id: "acre",
    name: "Acre",
    fullName: "Acre",
    toSqm: 4046.86,
  },
  {
    id: "hectare",
    name: "Hectare",
    fullName: "Hectare",
    toSqm: 10000,
  },
];

const UnitConverter = () => {
  const [fromValue, setFromValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<UnitType>("plot");
  const [toUnit, setToUnit] = useState<UnitType>("sqm");
  const [showInfo, setShowInfo] = useState(false);

  const convert = (value: number, from: UnitType, to: UnitType): number => {
    const fromUnitData = units.find((u) => u.id === from);
    const toUnitData = units.find((u) => u.id === to);

    if (!fromUnitData || !toUnitData) return 0;

    // Convert to square meters first, then to target unit
    const sqm = value * fromUnitData.toSqm;
    return sqm / toUnitData.toSqm;
  };

  const handleSwapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const fromUnitData = units.find((u) => u.id === fromUnit);
  const toUnitData = units.find((u) => u.id === toUnit);

  const numericValue = parseFloat(fromValue) || 0;
  const convertedValue = convert(numericValue, fromUnit, toUnit);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-montserrat font-bold text-2xl text-brand-blue dark:text-white">
          Area Unit Converter
        </h2>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          title="Show conversion info"
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
            Standard Conversions
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>• 1 Plot (Standard) ≈ 500 m² (50ft × 100ft)</li>
            <li>• 1 Acre = 4,046.86 m²</li>
            <li>• 1 Hectare = 10,000 m²</li>
            <li>• 1 Acre ≈ 8.09 Plots</li>
            <li>• 1 Hectare ≈ 20 Plots</li>
          </ul>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
            Note: Plot sizes may vary by location. The standard plot size used here
            is 500 m² (approximately 50ft × 100ft), which is common in Nigeria.
          </p>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* From Unit */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            From
          </label>
          <input
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            placeholder="Enter value"
            className="w-full px-4 py-4 text-2xl font-bold border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors"
            step="any"
            min="0"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value as UnitType)}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors font-medium"
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.fullName} ({unit.name})
              </option>
            ))}
          </select>
        </div>

        {/* Swap Button */}
        <div className="flex items-center justify-center md:mt-16">
          <motion.button
            onClick={handleSwapUnits}
            className="p-4 bg-brand-orange hover:bg-orange-600 text-white rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            title="Swap units"
          >
            <ArrowRightLeft size={24} />
          </motion.button>
        </div>

        {/* To Unit */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
            To
          </label>
          <div className="w-full px-4 py-4 text-2xl font-bold bg-gray-50 dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl text-brand-blue dark:text-blue-400">
            {convertedValue.toLocaleString("en-US", {
              minimumFractionDigits: 0,
              maximumFractionDigits: 4,
            })}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value as UnitType)}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:border-brand-blue dark:bg-gray-700 dark:text-white transition-colors font-medium"
          >
            {units.map((unit) => (
              <option key={unit.id} value={unit.id}>
                {unit.fullName} ({unit.name})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Reference */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {units.map((unit) => {
          const value = convert(numericValue, fromUnit, unit.id);
          return (
            <motion.button
              key={unit.id}
              onClick={() => setToUnit(unit.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                unit.id === toUnit
                  ? "border-brand-blue bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-brand-orange"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                {unit.fullName}
              </div>
              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {value.toLocaleString("en-US", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                })}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {unit.name}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Common Conversions */}
      <div className="mt-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
        <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-3">
          Common Property Sizes
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              Standard Plot:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              500 m²
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Half Plot:</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              250 m²
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              1 Acre Estate:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              ≈ 8 Plots
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">
              1 Hectare Estate:
            </span>
            <span className="font-semibold text-gray-900 dark:text-white">
              ≈ 20 Plots
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;

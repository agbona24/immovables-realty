"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, FileText, Download, RotateCcw } from "lucide-react";

interface Document {
  id: string;
  title: string;
  description: string;
  category: "seller" | "buyer" | "verification" | "legal";
  priority: "high" | "medium" | "low";
}

const documents: Document[] = [
  // From Seller
  {
    id: "cof-o",
    title: "Certificate of Occupancy (C of O)",
    description:
      "The title document showing legal ownership. Must be verified at State Lands Registry.",
    category: "seller",
    priority: "high",
  },
  {
    id: "deed-assignment",
    title: "Deed of Assignment",
    description:
      "Document transferring ownership from seller to buyer. Must be stamped and registered.",
    category: "seller",
    priority: "high",
  },
  {
    id: "survey-plan",
    title: "Survey Plan",
    description:
      "Approved survey showing property boundaries, coordinates, and beacons.",
    category: "seller",
    priority: "high",
  },
  {
    id: "tax-clearance",
    title: "Tax Clearance Certificate",
    description:
      "Proof that seller has paid all property taxes up to date.",
    category: "seller",
    priority: "medium",
  },
  {
    id: "gazette",
    title: "Government Gazette (if applicable)",
    description:
      "For government-allocated lands, showing initial land allocation.",
    category: "seller",
    priority: "medium",
  },

  // From Buyer
  {
    id: "valid-id",
    title: "Valid Identification",
    description:
      "International passport, driver's license, or national ID card.",
    category: "buyer",
    priority: "high",
  },
  {
    id: "passport-photo",
    title: "Passport Photographs",
    description: "Recent passport-sized photographs (usually 4 copies).",
    category: "buyer",
    priority: "medium",
  },
  {
    id: "buyer-tax",
    title: "Tax Identification Number (TIN)",
    description: "Your tax identification number for registration purposes.",
    category: "buyer",
    priority: "medium",
  },

  // Verification Documents
  {
    id: "status-report",
    title: "Status Report / Land Search",
    description:
      "Verification from State Lands Registry confirming no encumbrances.",
    category: "verification",
    priority: "high",
  },
  {
    id: "survey-verification",
    title: "Survey Verification",
    description:
      "Confirmation from Surveyor General's office that survey is authentic.",
    category: "verification",
    priority: "high",
  },
  {
    id: "charting",
    title: "Charting/Site Plan",
    description:
      "Official site plan from government showing property layout and approval.",
    category: "verification",
    priority: "medium",
  },

  // Legal Documents
  {
    id: "contract-sale",
    title: "Contract of Sale",
    description:
      "Agreement between buyer and seller outlining terms and conditions.",
    category: "legal",
    priority: "high",
  },
  {
    id: "power-attorney",
    title: "Power of Attorney (if applicable)",
    description:
      "If someone is representing buyer or seller, properly executed POA.",
    category: "legal",
    priority: "medium",
  },
  {
    id: "consent-governor",
    title: "Governor's Consent Application",
    description:
      "Application form for state governor's consent to transfer (required by law).",
    category: "legal",
    priority: "high",
  },
];

const categories = [
  { id: "all", name: "All Documents", color: "gray" },
  { id: "seller", name: "From Seller", color: "blue" },
  { id: "buyer", name: "From Buyer", color: "green" },
  { id: "verification", name: "Verification", color: "purple" },
  { id: "legal", name: "Legal Process", color: "orange" },
];

const STORAGE_KEY = "property_document_checklist";

const PropertyDocumentChecklist = () => {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Load checked items from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCheckedItems(new Set(JSON.parse(stored)));
      }
    } catch (error) {
      console.error("Error loading checklist:", error);
    }
  }, []);

  // Save checked items to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...checkedItems]));
    } catch (error) {
      console.error("Error saving checklist:", error);
    }
  }, [checkedItems]);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const resetChecklist = () => {
    if (confirm("Are you sure you want to reset the entire checklist?")) {
      setCheckedItems(new Set());
    }
  };

  const downloadChecklist = () => {
    const content = documents
      .map((doc) => {
        const checked = checkedItems.has(doc.id) ? "[✓]" : "[ ]";
        return `${checked} ${doc.title}\n   ${doc.description}\n   Category: ${doc.category} | Priority: ${doc.priority}\n`;
      })
      .join("\n");

    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "property-document-checklist.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const filteredDocuments =
    selectedCategory === "all"
      ? documents
      : documents.filter((doc) => doc.category === selectedCategory);

  const totalDocuments = documents.length;
  const completedDocuments = checkedItems.size;
  const progress = (completedDocuments / totalDocuments) * 100;

  const categoryColors: Record<string, string> = {
    seller: "bg-blue-500",
    buyer: "bg-green-500",
    verification: "bg-purple-500",
    legal: "bg-orange-500",
  };

  const priorityColors: Record<string, string> = {
    high: "text-red-600 dark:text-red-400",
    medium: "text-yellow-600 dark:text-yellow-400",
    low: "text-gray-600 dark:text-gray-400",
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-montserrat font-bold text-2xl text-brand-blue dark:text-white">
          Property Document Checklist
        </h2>
        <div className="flex gap-2">
          <button
            onClick={downloadChecklist}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Download checklist"
          >
            <Download size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          <button
            onClick={resetChecklist}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Reset checklist"
          >
            <RotateCcw size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm font-bold text-brand-blue dark:text-blue-400">
            {completedDocuments} / {totalDocuments} ({Math.round(progress)}%)
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-brand-blue to-blue-600 rounded-full"
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => {
          const categoryDocs =
            category.id === "all"
              ? documents
              : documents.filter((doc) => doc.category === category.id);
          const categoryCompleted = categoryDocs.filter((doc) =>
            checkedItems.has(doc.id)
          ).length;

          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">
                {categoryCompleted}/{categoryDocs.length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Document List */}
      <div className="space-y-3">
        {filteredDocuments.map((doc, index) => {
          const isChecked = checkedItems.has(doc.id);
          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
              onClick={() => toggleItem(doc.id)}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                isChecked
                  ? "bg-green-50 dark:bg-green-900/20 border-green-500 dark:border-green-600"
                  : "bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-600 hover:border-brand-blue dark:hover:border-blue-500"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  {isChecked ? (
                    <CheckCircle2
                      size={24}
                      className="text-green-600 dark:text-green-400"
                    />
                  ) : (
                    <Circle size={24} className="text-gray-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3
                      className={`font-semibold ${
                        isChecked
                          ? "text-green-900 dark:text-green-100 line-through"
                          : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {doc.title}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          categoryColors[doc.category]
                        } text-white`}
                      >
                        {doc.category}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full bg-gray-200 dark:bg-gray-600 ${
                          priorityColors[doc.priority]
                        } font-medium`}
                      >
                        {doc.priority}
                      </span>
                    </div>
                  </div>
                  <p
                    className={`text-sm ${
                      isChecked
                        ? "text-green-700 dark:text-green-300"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {doc.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Help Section */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <FileText className="w-6 h-6 text-brand-blue dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-brand-blue dark:text-blue-400 mb-2">
              Important Reminders
            </h3>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                • Always engage a qualified lawyer for all property transactions
              </li>
              <li>
                • Verify all documents at the appropriate government offices
              </li>
              <li>
                • Keep copies of all documents for your records
              </li>
              <li>
                • Budget 3-6 months for complete documentation and registration
              </li>
              <li>
                • Governor's Consent is mandatory for all property transfers in Nigeria
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDocumentChecklist;

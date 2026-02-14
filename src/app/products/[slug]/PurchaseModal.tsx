"use client";

import { useState } from "react";
import { PurchaseForm } from "@/components/PurchaseForm";
import { Tooltip } from "@/components/Tooltip";
import type { Product } from "@/lib/products";

export function PurchaseModal({ product }: { product: Product }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Tooltip content="Fill in your contact details to request a purchase. We'll send your request to our team.">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
        >
          Buy / Request Quote
        </button>
      </Tooltip>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/65"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-theme bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-gray-900">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-theme-heading">
                Confirm Purchase — {product.name}
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded p-1 text-theme-body transition hover:bg-slate-100 hover:text-theme-heading dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="mb-4 text-sm text-theme-body">
              Please enter your contact details below. Your purchase request will be sent to our
              team and we will follow up with you shortly.
            </p>
            <PurchaseForm
              productName={product.name}
              productSlug={product.slug}
              onSuccess={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

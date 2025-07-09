import { CreditCard, Download } from 'lucide-react';

const payments = [
  {
    id: "INV-2023-06-15",
    date: "15 Jun 2023",
    amount: "$120.00",
    method: "VISA **** 4242",
    status: "Paid",
    download: true
  },
  {
    id: "INV-2023-05-22",
    date: "22 May 2023",
    amount: "$95.00",
    method: "PayPal",
    status: "Paid",
    download: true
  },
  {
    id: "INV-2023-05-10",
    date: "10 May 2023",
    amount: "$75.00",
    method: "VISA **** 4242",
    status: "Refunded",
    download: false
  }
];

export default function Payments() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Payments & Billing</h2>
      
      <div className="space-y-4">
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <CreditCard className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                VISA **** 4242
              </span>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              Edit
            </button>
          </div>
        </div>
        
        <div className="space-y-3">
          {payments.map((payment) => (
            <div key={payment.id} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{payment.id}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{payment.amount}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{payment.method}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  payment.status === "Paid" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" :
                  "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"
                }`}>
                  {payment.status}
                </span>
                {payment.download && (
                  <button className="text-xs flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    <Download className="w-3 h-3 mr-1" /> Invoice
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className="mt-3 w-full py-2 text-sm font-medium text-center text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
        View Payment History
      </button>
    </div>
  );
}
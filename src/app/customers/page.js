"use client";

import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import CustomerTable from "../components/CustomerTable";
import Sidebar from "../components/Sidebar";

// Function to generate a random customer
const generateCustomer = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  signupDate: faker.date.past().toISOString(),
  lastActivity: faker.date.recent().toISOString(),
});

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const customersPerPage = 10;
  const totalCustomers = 100;
  useEffect(() => {
    generateCustomers();
  }, []);

  useEffect(() => {
    filterCustomers();
  }, [customers, searchTerm]);

  const generateCustomers = () => {
    setIsLoading(true);
    try {
      const allCustomers = Array.from(
        { length: totalCustomers },
        generateCustomer
      );
      setCustomers(allCustomers);
      setFilteredCustomers(allCustomers);
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating customers:", error);
      setError("Error generating customers");
      setIsLoading(false);
    }
  };

  const filterCustomers = () => {
    const filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
    setTotalPages(Math.ceil(filtered.length / customersPerPage));
    setCurrentPage(1);
  };

  // Get current page customers
  const getCurrentPageCustomers = () => {
    const startIndex = (currentPage - 1) * customersPerPage;
    const endIndex = startIndex + customersPerPage;
    return filteredCustomers.slice(startIndex, endIndex);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8 text-black">Customers</h1>
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-3 pl-12 text-xl text-gray-900 placeholder-gray-500 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-6 w-6 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <CustomerTable
            customers={getCurrentPageCustomers()}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}

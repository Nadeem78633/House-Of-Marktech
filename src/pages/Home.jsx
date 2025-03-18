import React, { useState, useEffect } from "react";
import { filterUsers } from "../utils/filterUsers";
import {
  Header,
  ContactForm,
  HeroSection,
  ServiceCards,
  PricingTable,
  UserList,
} from "../components";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle search
  const handleSearch = (query) => {
    const filtered = filterUsers(users, query);
    setFilteredUsers(filtered);
  };
  return (
    <>
      <Header />
      <HeroSection />
      <ServiceCards />
      <PricingTable />
      <ContactForm />
      <UserList users={filteredUsers} onSearch={handleSearch} />
    </>
  );
};

export default Home;

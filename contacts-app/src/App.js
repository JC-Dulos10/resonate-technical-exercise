import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setContacts(response.data))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, []);

  // Scroll detection to hide/show search bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {  // Slightly higher threshold for better effect
        setShowSearch(false);
      } else {
        setShowSearch(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#B591D9] min-h-screen">
      {/* Header with dynamic height */}
      <header
        className={`sticky top-0 bg-[#443659] text-white py-4 shadow-md z-10 transition-all duration-300 ${
          showSearch ? "h-[200px]" : "h-[100px]"
        }`}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contacts</h1>
          <div
            className={`mt-4 transition-opacity duration-300 ${
              showSearch ? "opacity-100" : "opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Search contacts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 w-3/4 max-w-md rounded-md border border-[#443659] text-black"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <ContactList contacts={filteredContacts} />
      </main>
    </div>
  );
}

export default App;

import React from "react";

function ContactCard({ contact }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-lg font-bold text-gray-800">{contact.name}</h2>
      <p className="text-gray-600">
        <strong>Email:</strong> {contact.email}
      </p>
      <p className="text-gray-600">
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p className="text-gray-600">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${contact.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {contact.website}
        </a>
      </p>
    </div>
  );
}

export default ContactCard;

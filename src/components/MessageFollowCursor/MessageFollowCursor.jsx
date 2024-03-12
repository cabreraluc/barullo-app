import React, { useState } from "react";

function MessageFollowCursor() {
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleItemSelect = (selectedItem) => {
    // Aquí estableces el mensaje basado en el elemento seleccionado
    setMessage(`Seleccionaste: ${selectedItem}`);
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <p>Selecciona un elemento:</p>
      <ul>
        <li onClick={() => handleItemSelect("Elemento 1")}>Elemento 1</li>
        <li onClick={() => handleItemSelect("Elemento 2")}>Elemento 2</li>
        <li onClick={() => handleItemSelect("Elemento 3")}>Elemento 3</li>
      </ul>
      {message && (
        <div
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            backgroundColor: "lightgray",
            padding: "5px",
            borderRadius: "5px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            pointerEvents: "none", // Evita que el mensaje interfiera con los eventos del mouse
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default MessageFollowCursor;

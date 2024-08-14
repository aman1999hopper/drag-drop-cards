import React, { useState } from 'react';
import Card from './Card';
import Modal from '../components/Model.js';
import '../components/main.css'

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [selectedContent, setSelectedContent] = useState('');

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      content: 'This is some dummy text for the card...',
    };
    setCards([...cards, newCard]);
  };

  const handleShowMore = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="canvas-container">
    <button
      onClick={addCard}
      className="add-card-button"
    >
      Add Card
    </button>
    <div className="relative h-full w-full">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} content={card.content} onShowMore={handleShowMore} />
      ))}
    </div>
    {selectedContent && (
      <Modal content={selectedContent} onClose={() => setSelectedContent('')} />
    )}
  </div>
  );
};

export default Canvas;

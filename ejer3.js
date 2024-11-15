import React from 'react';
import { Heart } from "lucide-react";

interface Card {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

function App() {
  const [cardsData, setCardsData] = React.useState<Card[]>([
    {
      title: 'Web primero',
      subtitle: 'C++',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas ex ab molestiae.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png'
    },
    {
      title: 'Web Segundo',
      subtitle: 'JavaScript',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas ex ab molestiae.',
      image: ''
    },
    {
      title: 'Web tercero',
      subtitle: 'Python',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptas ex ab molestiae.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png'
    }
  ]);

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-screen p-4 pt-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-4">Carteles con React</h2>
        <div className="flex flex-wrap justify-center">
          {cardsData.map((card, index) => (
            <div key={index} className="bg-gray-900 rounded shadow-md w-80 p-4 mx-2 my-4">
              {card.image ? (
                <img src={card.image} alt={card.subtitle} className="w-16 h-16 object-cover rounded mx-auto mb-4" />
              ) : (
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              )}
              <div className="text-center">
                <h5 className="text-lg font-bold text-white mb-2">{card.title}</h5>
                <h6 className="text-sm text-gray-600 mb-4">{card.subtitle}</h6>
                <p className="text-sm text-white mb-6">{card.description}</p>
                <button className="bg-transparent border-2 border-gray-400 rounded py-2 px-4 text-gray-400 hover:text-white hover:bg-gray-400">
                  Ir a la página
                </button>
                <Heart className="text-red-500 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
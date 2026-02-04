'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! 👋 Soy el asistente de PETCOM. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');

  // Respuestas predefinidas básicas
  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hola') || lowerMessage.includes('hi')) {
      return '¡Hola! ¿Cómo puedo ayudarte con tu mascota hoy?';
    }
    if (lowerMessage.includes('envío') || lowerMessage.includes('envio')) {
      return 'Ofrecemos envío gratis en pedidos mayores a $500. ¿Te gustaría saber más?';
    }
    if (lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
      return 'Nuestros precios son muy competitivos. ¿Buscas algo en específico?';
    }
    if (lowerMessage.includes('producto')) {
      return 'Tenemos una amplia variedad de productos para perros, gatos y otras mascotas. ¿Qué necesitas?';
    }
    if (lowerMessage.includes('gracias')) {
      return '¡De nada! Estoy aquí para ayudarte. 😊';
    }
    
    return 'Entiendo. ¿Podrías darme más detalles para ayudarte mejor?';
  };

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputText),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col animate-slide-up z-50">
          {/* Header */}
          <div className="bg-petcom-purple text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Asistente PETCOM</h3>
                <p className="text-xs text-white/80">En línea</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-petcom-purple text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                variant="secondary"
                className="bg-petcom-purple hover:bg-petcom-purple/90 px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-petcom-purple text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center z-50 group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-petcom-coral rounded-full animate-pulse" />
          </>
        )}
      </button>
    </>
  );
}

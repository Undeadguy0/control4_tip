import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import './MessageContainer.css'
import { UserMessage, SystemMessage } from './MessageContainer';

function App() {
    const [messages, setMessages] = useState([{id: 1, message:"Привет!", sender: 0}]);
    const [inputText, setInputText] = useState('');

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;

        const userMessage = {
            id: Date.now(),
            message: inputText.trim(),
            sender: 1
        };

        setMessages(prev => [...prev, userMessage]);
        setInputText('');

        setTimeout(() => {
            const systemMessage = {
                id: Date.now() + 1,
                message: "Сообщение получено!",
                sender: 0
            };
            setMessages(prev => [...prev, systemMessage]);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="App">
            <header className="App-header">Чат-бот по контрольной номер 4</header>

            <div className="messages-container">
                {messages.map((message) => (
                    message.sender
                        ? <UserMessage key={message.id} message={message.message} />
                        : <SystemMessage key={message.id} message={message.message} />
                ))}
            </div>

            <div className="input-container">
                <input
                    type="text"
                    className="message-input"
                    placeholder="Введите сообщение..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button
                    className="send-button"
                    onClick={handleSendMessage}
                    disabled={!inputText.trim()}
                >
                    Отправить
                </button>
            </div>
        </div>
    );
}

export default App;
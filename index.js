// EightBall Component
function EightBall({ answers }) {
  const [msg, setMsg] = React.useState("Think of a Question");  // Prefix useState with React.
  const [color, setColor] = React.useState("black");  // Prefix useState with React.

  function getRandomAnswer() {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIdx];
    setMsg(msg);
    setColor(color);
  }

  return (
    <div 
      onClick={getRandomAnswer} 
      style={{
        backgroundColor: color,
        color: 'white',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '20px auto'
      }}
    >
      {msg}
    </div>
  );
}

// App Component
function App() {
  const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ];

  return <EightBall answers={answers} />;
}

// For React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


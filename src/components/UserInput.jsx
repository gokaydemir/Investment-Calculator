function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initialInvestment}
            type="number"
            required
            onChange={(e) => onChangeInput("initialInvestment", e.target.value)}
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            type="number"
            required
            onChange={(e) => onChangeInput("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            type="number"
            required
            onChange={(e) => onChangeInput("expectedReturn", e.target.value)}
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            type="number"
            required
            onChange={(e) => onChangeInput("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;

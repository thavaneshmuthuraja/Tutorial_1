function TestForm() {
  return (
    <div style={{padding: '20px', backgroundColor: 'white', margin: '20px', border: '1px solid #ccc'}}>
      <h2>Test Form - Try Typing Here</h2>
      <div style={{marginBottom: '15px'}}>
        <label style={{display: 'block', marginBottom: '5px'}}>Name:</label>
        <input 
          type="text" 
          style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}
          placeholder="Type your name here"
        />
      </div>
      <div style={{marginBottom: '15px'}}>
        <label style={{display: 'block', marginBottom: '5px'}}>Email:</label>
        <input 
          type="email" 
          style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px'}}
          placeholder="Type your email here"
        />
      </div>
      <div style={{marginBottom: '15px'}}>
        <label style={{display: 'block', marginBottom: '5px'}}>Message:</label>
        <textarea 
          style={{width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '80px'}}
          placeholder="Type your message here"
        />
      </div>
    </div>
  );
}

export default TestForm;

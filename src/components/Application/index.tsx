const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' />
        </div>
        <div>
          <label htmlFor='job'>Job Locations</label>
          <select id='job'>
            <option value={''}>Select</option>
            <option value={'US'}>US</option>
            <option value={'GB'}>UK</option>
            <option value={'CA'}>CA</option>
          </select>
        </div>
        <div>
          <label>
            <input type='checkbox' id='terms' />I agree
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;

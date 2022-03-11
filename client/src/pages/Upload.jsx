import { useState } from 'react';

const Upload = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [genre, setGenre] = useState('');

  return (
    <section className="upload">
      <h1 className="upload__title">Upload</h1>
      <form className="upload__form">
        <div className="upload__input-group">
          <label htmlFor="" className="upload__label">
            Name:
          </label>
          <input type="text" className="upload__input" />
        </div>
        <div className="upload__input-group">
          <label htmlFor="" className="upload__label">
            Location:
          </label>
          <input type="text" className="upload__input" />
        </div>
        <div className="upload__input-group">
          <label htmlFor="" className="upload__label">
            Genre:
          </label>
          <input type="text" className="upload__input" />
        </div>
      </form>
    </section>
  );
};
export default Upload;

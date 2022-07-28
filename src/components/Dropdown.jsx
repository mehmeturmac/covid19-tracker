import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/covidSlice/covidSlice';

function Dropdown() {
  const dispatch = useDispatch();

  const countries = useSelector((state) => state.covid.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  console.log(countries);

  return (
    <div>
      <label>
        <select
        // value={countries} onChange={handleChange}
        >
          <option value="global">Global</option>
          {countries?.map((country, i) => (
            <option key={i} value={country.iso2}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Dropdown;

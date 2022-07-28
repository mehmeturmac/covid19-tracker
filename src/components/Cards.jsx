import { useSelector } from 'react-redux';

function Cards() {
  const data = useSelector((state) => state.covid.covidData);

  return (
    <>
      <div className="card">
        <p>Infected</p>
        <p>{data && data.confirmed.value}</p>
      </div>
      <div className="card">
        <p>Recovered</p>
        <p>{data && data.recovered.value}</p>
      </div>
      <div className="card">
        <p>Deaths</p>
        <p>{data && data.deaths.value}</p>
      </div>
    </>
  );
}

export default Cards;

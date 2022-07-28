import { useSelector } from 'react-redux';
import moment from 'moment';

function Cards() {
  const data = useSelector((state) => state.covid.covidData);

  return (
    <>
      <div className="card-box">
        <div className="card">
          <p className="title">Infected</p>
          <p>{data && data.confirmed.value}</p>
        </div>
        <div className="card">
          <p className="title">Recovered</p>
          <p>{data && data.recovered.value}</p>
        </div>
        <div className="card">
          <p className="title">Deaths</p>
          <p>{data && data.deaths.value}</p>
        </div>
      </div>
      <div className="card-info">
        <p className="title">Last Updated</p>
        <p>{data && moment(data.lastUpdate).format('MMMM Do YYYY, hh:mm')}</p>
      </div>
    </>
  );
}

export default Cards;

import axios from 'axios';

export default (Ticker) => {
  const api = axios.create({headers: {'Authorization': `Bearer ${process.env.FII_KEY}`}});

  // console.log(`'FiiAPI' ${Ticker}`);
  return api.get(`${process.env.FII_URL}/${Ticker}`)
    .then((response) => {
      // handle success
      const { data } = response.data;
      console.log(`'FiiAPI.then' ${Ticker}`);
      // console.debug(data);
      return data;
    })
    .catch((err) => console.debug(err));
};

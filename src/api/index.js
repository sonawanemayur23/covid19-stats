import axios from 'axios'


const instance = {
    url:axios.create({
        baseURL: 'https://api.covid19india.org/',
      }),
      path:{
        data:'data.json',
        stateDistrict:"state_district_wise.json"
      }
}

export default instance;
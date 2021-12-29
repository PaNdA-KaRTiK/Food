import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ay0ucFcfjDOOCb5SlP0JeCcLHPdv9HMx_ERRdrCROSVyoZSF8DOKS_PwvXWeFNOxKklUh65LeGo4SzHcRtfMbfS7Ayo1kKDT__ORYGqw6XQoeg_1mOQDRNOMvmHLYXYx'
    }
});
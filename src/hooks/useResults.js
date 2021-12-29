import { useState, useEffect} from "react";
import yelp from '../api/yelp';


export default () => {
    const[results,setResults] = useState([]);
    const[errorMessage,setErrorMessage] = useState('');

    const searchApi = async searchTerm => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            }); 
            setResults(response.data.businesses);
            // console.log(response.data);
        } catch(e){
            console.log(e.response.data);
            setErrorMessage("Something went Wrong");
        }
    }; 


    useEffect(() => {
        searchApi('Idli');
    }, []);

    return [searchApi, results, errorMessage];
}
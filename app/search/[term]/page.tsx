 
import {notFound} from "next/navigation";
type Props = {
    params:{
        term:string;
    }
};
const SearchPage = ({params:{term}}:Props) => {
    if(!term) notFound();
    const termToUse = decodeURI(term);

    // API call to get Searched Movies
    // API call to get Popular Movies
    return (
        <div>Welcome to search page : {termToUse}</div>
    )
}

export default SearchPage
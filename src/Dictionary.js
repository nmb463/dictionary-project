import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data.meanings[0]);
    }

    function search(event) {
        event.preventDefault();

        //documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey= `f917a08757btf485b3af40o0e41087f1`;
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
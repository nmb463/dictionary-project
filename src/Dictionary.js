import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null)

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse (response) {
        setPhotos(response.data.photos);
    }

    function search() {
         //documentation: https://www.shecodes.io/learn/apis/dictionary
         let apiKey= `f917a08757btf485b3af40o0e41087f1`;
         let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
         axios.get(apiUrl).then(handleDictionaryResponse);
        let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`; 
        axios.get(imageApiUrl).then(handleImageResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary">

                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} autoFocus={true} defaultValue={props.defaultKeyword} />
                    </form>
                    <div className="hint">
                        suggested words: chickadee, meditation, blossom, ethereal...
                    </div>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        )
    } else {
        load();
        return "Loading";
    }
}
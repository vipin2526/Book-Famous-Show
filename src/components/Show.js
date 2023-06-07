import { useNavigate } from 'react-router-dom';

export default function Show(props) {
    const show = props.data.show;
    const navigate = useNavigate();
    function to_aboutshow() {
        navigate('/aboutshow', { state: { show } });
    }
    function to_bookshow() {
        navigate('/bookshow', { state: { show } });
    }
    return (
        <div className="show_box container-float">
            <div className="row">
                <div className="col-md-4 "><img src={show.image.medium} alt="not found" /></div>
                <div className="col-md-8 detail">
                    <div className="tital"><h1>{show.name}</h1></div>
                    <div className="other_details">
                        <div className="language"> <h4>Language: {show.language}</h4></div>
                        <div className="rating"> <h4>Rating: {(show.rating.average) ? show.rating.average : 6.8}</h4></div>
                        <div className="category"> <h4>Category: {show.genres.map(e => (e + ' '))} </h4></div>
                    </div>
                    <div className="input ">
                        <button className="get_details mx-2 " onClick={() => to_aboutshow()}>Know More</button>
                        <button className="book_ticket mx-2" onClick={() => to_bookshow()}>Book Ticket</button>
                    </div>
                </div>
            </div>
        </div >
    )
}


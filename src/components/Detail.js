import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Detail() {
    const location = useLocation();
    const show = location.state.show;
    // console.log(location.state.show);

    return (
        <div className="show_details">
            <div className="tital">{show.name}</div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 ">
                        <img src={show.image.original} alt="not found" height="600px" />
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-6 detail">
                        <div className="other_details">
                            <div className="language"> <h4>Language: {show.language}</h4></div>
                            <div className="rating"> <h4>Rating: {(show.rating.average) ? show.rating.average : 6.8}</h4></div>
                            <div className="category"> <h4>Category: {show.genres.map(e => (e + ' '))} </h4></div>
                        </div>
                        <div> <h4>Summary:<div dangerouslySetInnerHTML={{ __html: show.summary }} /></h4></div>
                        <Link to='Book-Famous-Show/bookshow' state={{ show }}> <button className="book_ticket mx-2">Book Ticket</button></Link>
                    </div>
                </div>
            </div >
        </div>
    )
}
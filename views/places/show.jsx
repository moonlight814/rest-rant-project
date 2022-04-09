const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
           
            <h2>Rating
                <p>Not Rated</p>
            </h2>
            <h2>
                Description
           <p> Located in {data.place.city} + " " + {data.place.state} and serving {data.place.cuisines}</p> 
            </h2>
            <h2>
                Comments
                <p>No comments yet!</p>
            </h2>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
            Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
            </form>    
          </main>
        </Def>
    )
}

module.exports = show
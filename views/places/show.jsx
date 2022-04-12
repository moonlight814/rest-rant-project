const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6" text-align="center">
            <img
              className="img-fluid"
              src={data.place.pic}
              alt={data.place.name}
            />
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <div>
              <h2>Rating</h2>
              <p>Not Rated</p>
            </div>
            <div>
              <h2>Description</h2>
              <p>
                Serving {data.place.cuisines}
                <br />
                Founded in {data.place.founded}
                <br />
                Located in {data.place.city}, {data.place.state}
              </p>
            </div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
          <hl />
          <div className="row">
            <h2>
              <br />
              <hr />
              Comments
            </h2>
            <p>No comments yet!</p>
           
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
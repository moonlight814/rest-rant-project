const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src="/images/image_homepage.jpg" alt="variety of foods on plate" />
              <div id= 'anchorImage'>
                  Photo by <a href="https://unsplash.com/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godiner</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
              </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
          </main>
      </Def>
      
    )
  }

module.exports = home
var socket = io("http://185.69.154.252");
var mes_obj = {}
var batton;
var Block_2 = React.createClass({
  getInitialState: function () {
    socket.on("end_news_mes", function (data) {
      root_5.innerHTML = '';
    })
    socket.on("news_mes", function (data) {
      let obj = Object.keys(data)[0];
      mes_obj[obj] = data[obj];
      console.log(mes_obj)
      ReactDOM.render(<Block_2 />, root_2)
    });
    socket.emit("shipped", {})
    return { checked: true };
  },
  new_message_1: function (data) {
    batton = data
    ReactDOM.render(<Block_3 />, root);
  },
  render: function () {
    var tt = this.new_message_1;
    return (
      <div className="lef-blok">
        <div className="container-fluid ot_my">
          {
            Object.keys(mes_obj).map(function (el) {
              return (
                <div className="in" key={el}>
                  <button className="btn-1" onClick={() => { tt(el) }}   >
                    {el}<br />
                    {"монет " + Object.keys(mes_obj[el]).length}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
});
var Block_3 = React.createClass({
  render: function () {
    let tt = Object.keys(mes_obj[batton]);
    return (
      <section className="list-wrap">
        <label forName="search-text">название {batton}</label>
        <span className="list-count" />
        <ul idName="list">
          {tt.map(function (el) {
            return (
              <li className="in" key={el} >
                <div>{el}</div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
});
var Block_4 = React.createClass({
  render: function () {
    return (
      <div className="loading-bro">
        <h1>загрузка</h1>
        <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
          <circle id="loading-inner" cx="75" cy="75" r="60" />
        </svg>
      </div>
    );
  }
});
var root = document.getElementById("root");
var root_5 = document.getElementById("root_5");
var root_2 = document.getElementById("root_2");
ReactDOM.render(<Block_2 />, root_2);
ReactDOM.render(<Block_4 />, root_5);

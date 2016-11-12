var React = require('react');

var IndexComponent = React.createClass({
	  handleClick: function() {
      	console.log("Hi");
  },
	render:function(){
		return(
			<div>
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
				<link rel="stylesheet" href="/assets/css/style.css"/>
				<h1 className="title"> New York Times </h1>
			<div className="panel panel-default articles">
			 {this.props.articles.map((article, index) => (
			<div>
        		 <h2>{article.title}</h2>
        		 <p>{article.summary}</p>
        		 <button value={article}> Add </button>
        	</div>
   				 ))}
			 </div>
			</div>
			)
	}
})

module.exports = IndexComponent;
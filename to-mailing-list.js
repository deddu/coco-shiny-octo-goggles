const fs = require('fs');
const raw = fs.readFileSync('./20190310-content.txt').toString('utf8');

const articles = raw.split('[articolo]\n');

const summaries = articles.map(x=>x.slice(0,100))

function writeOne(article,idx){
	let title=`article-${idx}`;
	fs.writeFileSync(`./data/${title}.txt`, article);
}

articles.forEach(writeOne)


const blobs=summaries.map((x,i)=>`<li class='my-class'><a href="article-${i}"> ${x}</a></li>`)

let header = `
<html>
<body>
<title> HELLO FROM ARIO</title> 
<ul>
`

let footer = `
</ul>
<div> we'll see you next time! CIAO!</div>
</body>
</html>
`

let mailing_list = header + blobs.join('\n') + footer;

fs.writeFileSync(`./data/ml.html`, mailing_list);

console.log(summaries);
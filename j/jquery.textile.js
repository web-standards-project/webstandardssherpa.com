!function(){jQuery.textile=function(a){var b,c,d,e,f,g,h,i,j,k=a;qtags=[["\\*","strong"],["\\?\\?","cite"],["\\+","ins"],["~","sub"],["\\^","sup"],["@","code"]];for(var l=0,m=qtags.length;m>l;l++)b=qtags[l][0],c=qtags[l][1],d=new RegExp(b+"\\b(.+?)\\b"+b,"g"),k=k.replace(d,"<"+c+">$1</"+c+">");d=new RegExp("\\b_(.+?)_\\b","g"),k=k.replace(d,"<em>$1</em>"),d=new RegExp("[s\n]-(.+?)-[s\n]","g"),k=k.replace(d,"<del>$1</del>"),d=new RegExp('"\\b(.+?)\\(\\b(.+?)\\b\\)":([^\\s]+)',"g"),k=k.replace(d,'<a href="$3" title="$2">$1</a>'),d=new RegExp('"\\b(.+?)\\b":([^\\s]+)',"g"),k=k.replace(d,'<a href="$2">$1</a>'),d=new RegExp("!\\b(.+?)\\(\\b(.+?)\\b\\)!","g"),k=k.replace(d,'<img src="$1" alt="$2">'),d=new RegExp("!\\b(.+?)\\b!","g"),k=k.replace(d,'<img src="$1">'),d=new RegExp("(.*)\n([^#*\n].*)","g"),k=k.replace(d,"$1<br />$2"),d=new RegExp("\n<br />","g"),k=k.replace(d,"\n"),f=k.split("\n"),e="";for(var l=0,n=f.length;n>l;l++)g=f[l].replace(/\s*$/,""),h=0,-1!=g.search(/^\s*bq\.\s+/)&&(g=g.replace(/^\s*bq\.\s+/,"	<blockquote>")+"</blockquote>",h=1),-1!=g.search(/^\s*h[1|2|3|4|5|6]\.\s+/)&&(d=new RegExp("h([1|2|3|4|5|6]).(.+)","g"),g=g.replace(d,"<h$1>$2</h$1>"),h=1),-1!=g.search(/^\s*\*\s+/)&&(g=g.replace(/^\s*\*\s+/,"	<liu>")+"</liu>",h=1),-1!=g.search(/^\s*#\s+/)&&(g=g.replace(/^\s*#\s+/,"	<lio>")+"</lio>",h=1),!h&&g.replace(/\s/g,"").length>0&&(g="<p>"+g+"</p>"),f[l]=g+"\n";i=0,j="";for(var l=0,n=f.length;n>l;l++)g=f[l],i&&"ul"==j&&!g.match(/^\t<liu/)&&(g="</ul>\n"+g,i=0),i&&"ol"==j&&!g.match(/^\t<lio/)&&(g="</ol>\n"+g,i=0),!i&&g.match(/^\t<liu/)&&(g="<ul>"+g,i=1,j="ul"),!i&&g.match(/^\t<lio/)&&(g="<ol>"+g,i=1,j="ol"),f[l]=g;return k=f.join("\n"),k=k.replace(/li[o|u]>/g,"li>")}}();
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,o){e.exports=o(29)},29:function(e,t,o){"use strict";o.r(t);var a=o(10),n=o(11),r=o(16),i=o(12),s=o(4),u=o(17),h=o(0),l=o.n(h),c=o(13),d=o.n(c),m=o(8),f=o.n(m),b=o(14),w=o.n(b),p=o(15),g=o.n(p),x=[{text:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",author:"Helen Keller"},{text:"Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.",author:"Oscar Wilde"},{text:"It is during our darkest moments that we must focus to see the light.",author:"Aristotle"},{text:"Try to be a rainbow in someone's cloud.",author:"Maya Angelou"},{text:"Find a place inside where there's joy, and the joy will burn out the pain.",author:"Joseph Campbell"},{text:"Nothing is impossible, the word itself says 'I'm possible'!",author:"Audrey Hepburn"},{text:"Don't judge each day by the harvest you reap but by the seeds that you plant.",author:"Robert Louis Stevenson"},{text:"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",author:"Buddha"},{text:"The only thing necessary for the triumph of evil is for good men to do nothing.",author:"Edmund Burke"},{text:"One of the most beautiful qualities of true friendship is to understand and to be understood.",author:"Lucius Annaeus Seneca"},{text:"Where there is love there is life.",author:"Mahatma Gandhi"},{text:"Love is composed of a single soul inhabiting two bodies.",author:"Aristotle"},{text:"Do not go where the path may lead, go instead where there is no path and leave a trail.",author:"Ralph Waldo Emerson"},{text:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author:"Winston Churchill"},{text:"Do all things with love.",author:"Og Mandino"},{text:"Blessed are the hearts that can bend; they shall never be broken.",author:"Albert Camus"},{text:"Love isn't something you find. Love is something that finds you.",author:"Loretta Young"},{text:"In three words I can sum up everything I've learned about life: it goes on.",author:"Robert Frost"},{text:"Change your thoughts and you change your world.",author:"Norman Vincent Peale"},{text:"Education is the most powerful weapon which you can use to change the world.",author:"Nelson Mandela"}],y=function(e){function t(e){var o;return Object(a.a)(this,t),(o=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={quote:x[E(x.length)]},o.handleClick=o.handleClick.bind(Object(s.a)(o)),o}return Object(u.a)(t,e),Object(n.a)(t,[{key:"handleClick",value:function(){var e;do{e=x[E(x.length)]}while(e.text===this.state.quote.text);this.setState({quote:e})}},{key:"render",value:function(){return l.a.createElement(w.a,{id:"quote-box",className:"vh-100 d-flex align-items-center"},l.a.createElement(g.a,{className:"m-0 w-100"},l.a.createElement(v,{quote:this.state.quote}),l.a.createElement(q,{onClick:this.handleClick}),l.a.createElement(k,{quote:this.state.quote})))}}]),t}(l.a.Component);function v(e){return l.a.createElement("blockquote",{className:"blockquote text-center"},l.a.createElement("p",{id:"text",className:"mb-0"},e.quote.text),l.a.createElement("footer",{className:"blockquote-footer"},l.a.createElement("cite",{id:"author",title:"Source Title"},e.quote.author)))}function q(e){return l.a.createElement(f.a,{id:"new-quote",variant:"secondary",className:"float-right btn-sm",onClick:e.onClick},"New Quote")}function k(e){var t="https://twitter.com/intent/tweet?text="+encodeURIComponent('"'+e.quote.text+'" '+e.quote.author);return l.a.createElement(f.a,{id:"tweet-quote",className:"float-left btn-sm",href:t},l.a.createElement("i",{className:"fa fa-twitter"})," Tweet")}function E(e){return Math.floor(Math.random()*e)}d.a.render(l.a.createElement(y,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.892cd8fd.chunk.js.map
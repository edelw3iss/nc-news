export default function formatDate (article) {
return `${article.created_at.slice(0,10)} ${article.created_at.slice(11,16)}`
}
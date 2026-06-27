let data = await fetch('./test.json').catch(err => {data = err}).then(res => res.json())

console.log(JSON.stringify(data["_embedded"]["events"][0], null, 2));
export { data };
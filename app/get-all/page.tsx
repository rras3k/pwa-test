export default async function Getall() {
	const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxIiwiZGF0ZUNyZWF0aW9uIjoiMjAyNC0wOS0yNiAwMzowMDowMCJ9.6FAG0aMLZyP1HOFtA1F9XDayATkHfyc9fF5bXeXrROo'
	let data = await fetch(
		'https://api.laval-test.algozzy.ovh/trips/today/'
		, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method: 'GET'
		}
	)
	let posts = await data.json()
	return (
		<>
			Message:{posts.message}
			{JSON.stringify(posts)}
		</>
	)
}

// body: '{"login":"artaxi", "password":"6808", version_app_mobile":"1.0.0"}'
//'https://api.laval-test.algozzy.ovh/identification'


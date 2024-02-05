document.addEventListener('DOMContentLoaded', function () {
	const input = document.getElementById('filterInput');
	const dataList = document.getElementById('dataList');

	async function fetchData() {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/users'
			);
			const data = await response.json();
			displayData(data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	function displayData(users) {
		users.forEach((user) => {
			const li = document.createElement('li');
			li.textContent = user.name;
			dataList.appendChild(li);
		});
	}

	// TODO: Complete the filterData function to filter user list based on input
	function filterData(event) {
		// ADD CODE HERE
	}

	input.addEventListener('keyup', filterData);

	fetchData();
});

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

		const filterValue = event.target.value.toLowerCase(); // erv
		// get all the elements in the list
		const listItems = dataList.querySelectorAll('li');

		// loop through the list and check if the input value is in the list
		listItems.forEach((item) => {
			if (item.textContent.toLowerCase().indexOf(filterValue) > -1) {
				// if the input value is in the list,
				item.style.display = 'block'; // display it
			} else {
				// if the input value is not in the list, do display it
				item.style.display = 'none';
			}
		});
	}

	input.addEventListener('keyup', filterData);

	fetchData();
});

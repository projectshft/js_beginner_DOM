// Mocking HTML elements
document.body.innerHTML = `
    <input type="text" id="filterInput" placeholder="Type to filter...">
    <ul id="dataList">
        <li>Alice</li>
        <li>Bob</li>
        <li>Charlie</li>
    </ul>
`;

// Mock the input event
const inputEvent = new Event('keyup');
const input = document.getElementById('filterInput');

test('filterData function filters the list based on input', () => {
	// Assuming the student will implement filterData to show/hide <li> elements
	input.value = 'Alice';
	document.getElementById('filterInput').dispatchEvent(inputEvent);

	const visibleItems = Array.from(
		document.getElementById('dataList').children
	).filter((item) => item.style.display !== 'none');

	// Test should initially fail because filterData is not implemented
	// Once implemented, it should pass if it correctly filters to show only matching items
	expect(visibleItems.length).toBe(1);
	expect(visibleItems[0].textContent).toBe('Alice');
});

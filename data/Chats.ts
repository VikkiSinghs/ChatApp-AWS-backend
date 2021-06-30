export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Vikram',
		imageUri: 'https://publicdomainvectors.org/photos/picture-of-death.png',
	}, {
		id: 'u2',
		name: 'Prem',
		imageUri: 'https://publicdomainvectors.org/photos/picture-of-death.png',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Prem!',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Vikram',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Prem',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Prem',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Vikram',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Vikram',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Prem',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Vikram',
		},
	}]
}


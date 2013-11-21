var family_tree = {
	"name": "great grandfather", "spouse": "great grandmother", "children": [
		{"name": "grandmother", "spouse": "grandfather", "children": [
			{"name": "aunt", "spouse": "uncle"},
			{"name": "father", "spouse": "mother", "children": [
				{"name": "sister", "spouse": "brother-in-law", "children": [
					{"name": "nephew"}
				]},
				{"name": "me", "spouse": "spouse"},
				{"name": "brother"}
			]}
		]},
		{"name": "great uncle", "spouse": "great aunt", "children": [
			{"name": "first cousin once removed", "children": [
				{"name": "second cousin"},
				{"name": "second second cousin"},
				{"name": "last second cousin"}
			]}
		]},
		{"name": "great uncle"}
	]
}

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			path: "",
			detail: {},
			favorites: []
		},
		actions: {
			loadingData: str => {
				fetch("https://swapi.dev/api/" + str + "/")
					.then(res => res.json())
					.then(data => setStore({ [str]: data.results }))
					.catch(error => console.log(error));
			},
			addURL: str => {
				const state = getStore();
				setStore({ ...state, path: str });
			},
			getSingle: url => {
				fetch(url)
					.then(res => res.json())
					.then(data => setStore({ detail: data }))
					.catch(error => console.log(error));
			},
			getFavorites: str => {
				const state = getStore();
				console.log(str);
				if (!state.favorites.includes(str)) {
					//para que si existe no lo vuelva a añadir
					setStore({ favorites: [...state.favorites, str] });
				}
			},
			deleteFavorites: id => {
				const state = getStore();
				let newList = [...state.favorites];
				newList.splice(id, 1);
				setStore({ favorites: newList });
			}
		}
	};
};

export default getState;
